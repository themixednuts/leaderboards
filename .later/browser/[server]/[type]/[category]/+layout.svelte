<script lang="ts">
  import { page } from '$app/stores'
  import Itemfilter from '$lib/market/itemfilter.svelte'
  import { endPage } from '$lib/market/stores'
  import type { LayoutData } from './$types'
  import { replaceLynshineSrc } from '$lib/utils'
  import FilterRowRange from '$lib/market/filterrowrange.svelte'
  import Search from '$lib/market/search.svelte'
  import PerkSearch from '$lib/market/perksearch.svelte'
  import { applyAction, deserialize } from '$app/forms'
  import { goto, invalidateAll } from '$app/navigation'

  export let data: LayoutData
  $: isPageStart = +$page.params.page <= 1
  $: isPageEnd = +$page.params.page >= $endPage
  $: search = $page.url.search

  let filterModal: HTMLDialogElement

  const tabIcons: { [k: string]: string } = {
    Buy: '/lyshineui/images/icons/contracts/contracts_iconbuy.png',
    Sell: '/lyshineui/images/icons/contracts/contracts_iconsell.png',
  }

  // Type guard to ensure the type of inputs[i]
  function isInputElement(element: Element): element is HTMLInputElement {
    return element.tagName === 'INPUT'
  }

  async function handleSubmit(event: Event & { currentTarget: EventTarget & HTMLFormElement }) {
    // Get form data
    const form = event.currentTarget

    // Access form elements
    const inputs = form.elements

    // Iterate through the form inputs
    for (let i = 0; i < inputs.length; i++) {
      const currentInput = inputs[i]
      if (isInputElement(currentInput)) {
        if (currentInput.value === '') {
          currentInput.removeAttribute('name')
        }
      }
    }

    // filterModal.close()
    form.submit()
  }
</script>

<div
  class="grid grid-cols-1 grid-rows-[auto,1fr] overflow-y-auto border-stone-500 bg-cover bg-center bg-no-repeat pb-2"
>
  <div class="flex">
    {#each ['Buy', 'Sell'] as tab}
      <a
        class="bg-crafting-tab hover:bg-crafting-tab-highlight flex h-14 w-56 place-content-center place-items-center border-2 border-b-0 border-stone-500 bg-cover bg-left bg-no-repeat uppercase {tab ===
        'sell'
          ? '-ml-[2px]'
          : '-mr-[2px]'}"
        class:bg-crafting-tab-highlight={$page.params.type.toLowerCase() === tab.toLowerCase()}
        class:border-b-2={$page.params.type.toLowerCase() !== tab.toLowerCase()}
        href="/market/browser/{$page.params.server}/{tab.toLowerCase()}/{$page.params.category}/1{$page.url.search}"
      >
        <img src={tabIcons[tab]} alt="" />
        {tab}
      </a>
    {/each}
    <div class="grow border-b-2 border-stone-500"></div>
  </div>
  <div
    class="flex grid-cols-[minmax(300px,350px),1fr] grid-rows-[3rem,1fr] flex-col gap-6 overflow-y-auto border-2 border-t-0 border-stone-500 bg-cover bg-center bg-no-repeat pl-4 pt-6 sm:grid"
  >
    <div class="row-span-full grid grid-cols-1 grid-rows-[subgrid]">
      <Search
        link="/market/browser/{$page.params.server}/{$page.params
          .type}/$category/1?family=$family&group=$group&item=$id"
        type="masteritem"
      />
      <Itemfilter filters={data.filter}></Itemfilter>
    </div>
    <div class="row-span-full flex h-full w-full grid-rows-[subgrid] flex-col sm:grid">
      <div class="row-start-1 flex flex-nowrap place-items-center justify-between">
        <div
          class="bg-filter flex aspect-square h-full place-content-center place-items-center bg-contain bg-center bg-no-repeat px-2"
        >
          <!-- Open the modal using ID.showModal() method -->
          <button class="" on:click={() => filterModal.showModal()}>
            <img src={replaceLynshineSrc('/lyshineui/images/icons/misc/icon_mapfilter.png')} class="" alt="" />
          </button>
          <dialog bind:this={filterModal} class="modal animate-none rounded-none">
            <form method="GET" on:submit|preventDefault={handleSubmit} action={$page.url.href}>
              <div
                class="modal-box bg-frame-2023 w-[600px] max-w-[700px] animate-none overflow-visible rounded-none bg-transparent bg-[length:225%] bg-[left_-7px_top_-10px] bg-no-repeat"
              >
                <div class="grid grid-cols-1 grid-rows-[auto,1fr] place-content-center place-items-center">
                  <div class="flex w-full place-content-center text-xl uppercase">filters</div>
                  <div class="flex w-full flex-col place-content-center place-items-center gap-4">
                    <FilterRowRange id="price" />
                    <FilterRowRange id="gearscore" />
                    <PerkSearch gems="" />
                    <div class="flex w-full justify-around gap-2">
                      <button
                        type="reset"
                        class="bg-primary-button hover:bg-primary-button-focus h-14 w-64 bg-contain bg-center bg-no-repeat"
                      >
                        Clear All
                      </button>
                      <button
                        type="submit"
                        class="bg-primary-button hover:bg-primary-button-focus h-14 w-64 bg-contain bg-center bg-no-repeat"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
                <div class="absolute -right-5 top-2 rotate-45">
                  <button
                    formmethod="dialog"
                    class=" h-full w-full animate-none"
                    on:click|preventDefault={() => filterModal.close()}
                  >
                    <img src="/lyshineui/images/slices/buttonclosediamond/buttonclosediamond.png" class="" alt="" />
                  </button>
                </div>
              </div>
              <div class="absolute right-0 top-0 -z-10 h-full w-full">
                <button
                  formmethod="dialog"
                  class=" h-full w-full animate-none"
                  on:click|preventDefault={() => filterModal.close()}
                ></button>
              </div>
            </form>
          </dialog>
        </div>
        <div class="flex place-items-center gap-2 px-2">
          <!-- <button class="shrink-0" class:pointer-events-none={isPageStart} disabled={isPageStart}>
            <a
              href={$page.route.id
                ?.replace('[server]', $page.params.server)
                .replace('[category]', $page.params.category)
                .replace('[page]', (+$page.params.page - 1).toString())
                .replace('[type]', $page.params.type) + search}
              class="flex h-full w-full place-items-center"
            >
              <img
                src="https://cdn.nwdb.info/db/images/live/v35/icons/misc/arrow_square.png"
                alt=""
                class="rotate-180"
                class:opacity-30={isPageStart}
              />
            </a>
          </button>
          -->
          Page {$page.params.page} of {$endPage}
          <!-- <button class="shrink-0" class:pointer-events-none={isPageEnd} disabled={isPageEnd}>
            <a
              href={$page.route.id
                ?.replace('[server]', $page.params.server)
                .replace('[category]', $page.params.category)
                .replace('[page]', (+$page.params.page + 1).toString())
                .replace('[type]', $page.params.type) + search}
              class="flex h-full w-full place-items-center"
            >
              <img
                src="https://cdn.nwdb.info/db/images/live/v35/icons/misc/arrow_square.png"
                alt=""
                class=""
                class:opacity-30={isPageEnd}
              />
            </a>
          </button>
          -->
        </div>
      </div>
      <slot />
    </div>
  </div>
</div>

<style>
  /* .bg-frame-2023 {
    background:
      url('/lyshineui/images/slices/framemultibg/framecorner.png') bottom 7px left 7px no-repeat;
  } */
</style>

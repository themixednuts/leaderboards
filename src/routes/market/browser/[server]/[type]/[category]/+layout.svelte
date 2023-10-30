<script lang="ts">
  import { page } from '$app/stores'
  import Itemfilter from '$lib/market/itemfilter.svelte'
  import { endPage } from '$lib/market/stores'
  import type { LayoutData } from './$types'

  export let data: LayoutData
  $: isPageStart = +$page.params.page <= 1
  $: isPageEnd = +$page.params.page >= $endPage

  const tabIcons: { [k: string]: string } = {
    Buy: '/lyshineui/images/icons/contracts/contracts_iconbuy.png',
    Sell: '/lyshineui/images/icons/contracts/contracts_iconsell.png',
  }
</script>

<div class=" grid grid-cols-1 grid-rows-[auto,1fr] overflow-y-auto bg-cover bg-center bg-no-repeat pb-2">
  <div class="flex gap-2">
    {#each ['Buy', 'Sell'] as tab}
      <a
        class="flex h-20 w-56 place-content-center place-items-center bg-cover bg-center bg-no-repeat uppercase"
        href="/market/browser/{$page.params.server}/{tab.toLowerCase()}/{$page.params.category}/1{$page.url.search}">
        <img src={tabIcons[tab]} alt="" />
        {tab}
      </a>
    {/each}
  </div>
  <div class="grid grid-cols-[auto,1fr] grid-rows-[3rem,1fr] gap-6 overflow-y-auto bg-cover bg-center bg-no-repeat">
    <div class="row-span-full grid grid-cols-1 grid-rows-[subgrid]">
      <div
        class="relative row-start-1 border-2 border-orange-400 border-opacity-30 bg-search bg-cover bg-center bg-no-repeat p-2 hover:bg-search-hover">
        <img
          src="/lyshineui/images/socialpane/icon_magnifying_glass.png"
          alt=""
          class="pointer-events-none absolute left-2 top-1/2 aspect-square -translate-y-1/2" />
        <input
          type="search"
          name=""
          id=""
          placeholder="Search"
          class="box-border h-full w-full grow border-none bg-transparent pl-8 outline-none" />
      </div>
      <Itemfilter filters={data.filter}></Itemfilter>
    </div>
    <div class="row-span-full grid min-h-0 w-full grid-rows-[subgrid]">
      <div class="row-start-1 flex flex-nowrap place-items-center justify-between">
        <div class="px-2">filter</div>
        <div class="flex place-items-center gap-2 px-2">
          <button class="{isPageStart ? "pointer-events-none" : ''}" disabled={isPageStart}>
            <a
              href={$page.route.id
                ?.replace('[server]', $page.params.server)
                .replace('[category]', $page.params.category)
                .replace('[page]', (+$page.params.page - 1).toString())
                .replace('[type]', $page.params.type) + $page.url.search}
              class="flex h-full w-full place-items-center">
              <img
                src="https://cdn.nwdb.info/db/images/live/v35/icons/misc/arrow_square.png"
                alt=""
                class="rotate-180"
                class:opacity-30={isPageStart} />
            </a>
          </button>
          Page {$page.params.page} of {$endPage}
          <button class="{isPageEnd ? 'pointer-events-none' : ''}" disabled={isPageEnd}>
            <a
              href={$page.route.id
                ?.replace('[server]', $page.params.server)
                .replace('[category]', $page.params.category)
                .replace('[page]', (+$page.params.page + 1).toString())
                .replace('[type]', $page.params.type) + $page.url.search}
              class="flex h-full w-full place-items-center">
              <img
                src="https://cdn.nwdb.info/db/images/live/v35/icons/misc/arrow_square.png"
                alt=""
                class=""
                class:opacity-30={isPageEnd} />
            </a>
          </button>
        </div>
      </div>
      <slot />
    </div>
  </div>
</div>
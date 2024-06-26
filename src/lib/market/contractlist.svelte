<script lang="ts">
  import { page } from '$app/stores'
  import type { MarketData } from '$lib/market.types'
  import { GetRomanFromNumber, ItemPerkScaling, getLocalizedDate, replaceLynshineSrc } from '$lib/utils'
  import { formatDistance, addSeconds, isPast } from 'date-fns'
  import { goto } from '$app/navigation'
  import type { Action } from 'svelte/action'

  export let items: Promise<(MarketData & { currentExpiration?: string })[]>
  $: sort = $page.url.searchParams.get('sort')

  type Expiration = {
    queryDate: string
    expirationSec: number
  }

  function updateExpiration(ele: HTMLDivElement, item: Expiration) {
    const currentDate = new Date()
    const { queryDate, expirationSec } = item

    let qDate: Date
    const unixTimeStampPattern = /^[0-9]+$/
    if (unixTimeStampPattern.test(queryDate)) qDate = new Date(+queryDate * 1000)
    else qDate = new Date(queryDate)

    const expirationDate = addSeconds(qDate, expirationSec)
    if (isPast(expirationDate)) ele.textContent = 'Expired'
    else
      ele.textContent = formatDistance(expirationDate, currentDate, { includeSeconds: true })
        .replace('about', '~')
        .replace('less than', '<')
  }

  const handleExpiration: Action<HTMLDivElement, Expiration> = (ele: HTMLDivElement, item: Expiration) => {
    updateExpiration(ele, item)
    const intervalId = setInterval(updateExpiration, 5000, ele, item)

    return {
      destroy() {
        clearInterval(intervalId)
      },
    }
  }

  function goToItem(ev: Event, item: MarketData) {
    const target = ev.target as HTMLElement
    if (target.tagName !== 'IMG') goto(`/market/items/${$page.params.server}/${item.itemKey}`)
  }
  const columns = [
    {
      key: 'name',
      label: 'Name',
      sortKey: 'name',
      isImage: false,
      isRotation: false,
    },
    {
      key: 'price',
      label: 'Price',
      sortKey: 'price',
      isImage: false,
      isRotation: false,
    },
    {
      key: 'tier',
      label: 'Tier',
      sortKey: 'tier',
      isImage: false,
      isRotation: false,
    },
    {
      key: 'gs',
      label: 'Gearscore',
      sortKey: 'gs',
      isImage: true,
      isRotation: true,
    },
    {
      key: 'attributes',
      label: 'Attributes',
      sortKey: 'attributes',
      isImage: false,
      isRotation: false,
    },
    {
      key: 'perks',
      label: 'Perk',
      sortKey: 'perks',
      isImage: false,
      isRotation: false,
    },
    {
      key: 'gem',
      label: 'Gem',
      sortKey: 'gem',
      isImage: false,
      isRotation: false,
    },
    {
      key: 'avail',
      label: 'Avail.',
      sortKey: 'avail',
      isImage: false,
      isRotation: false,
    },
    {
      key: 'exp',
      label: 'Expires In',
      sortKey: 'exp',
      isImage: false,
      isRotation: false,
    },
  ]

  let searchParams: string
  $: {
    $page.url.searchParams.delete('sort')
    searchParams = $page.url.searchParams.toString()
  }
</script>

<div class="h-full w-full overflow-y-auto">
  <table class="table table-zebra table-pin-rows table-xs relative w-full table-fixed rounded-none md:table-md">
    <thead class="">
      <tr class="border-b-2 border-stone-500">
        {#each columns as { key, label, sortKey, isImage, isRotation } (key)}
          <th
            class="relative h-full min-w-full overflow-clip text-clip"
            class:w-80={key === 'name'}
            class:w-24={key !== 'name'}
          >
            <a
              href="/market/browser/{$page.params.server}/{$page.params.type}/{$page.params
                .category}/1?{searchParams}&sort={sort === `${sortKey}_asc` || (!sort && sortKey === 'price')
                ? `${sortKey}_desc`
                : `${sortKey}_asc`}"
              class="flex h-full w-full place-items-center pl-2"
            >
              {#if isImage}
                <img
                  src={replaceLynshineSrc('/lyshineui/images/icons/misc/icon_gearscore_tan.png')}
                  alt=""
                  class="w-5 shrink-0"
                />
              {:else}
                {label}
              {/if}
            </a>
            {#if sort?.includes(sortKey) || (!sort && sortKey === 'price')}
              <img
                src={replaceLynshineSrc('/lyshineui/images/icons/misc/arrow.png')}
                alt=""
                class="absolute left-2 top-1/2 w-3 -translate-y-1/2"
                class:rotate-180={sort === `${sortKey}_asc` || (!sort && sortKey === 'price')}
              />
            {/if}
          </th>
        {/each}
      </tr>
    </thead>
    <tbody class="min-w-0 overflow-clip">
      {#await items}
        <tr>
          <td colspan="9" class="text-left">
            <div class="loading loading-bars"></div>
          </td>
        </tr>
      {:then items}
        {#each items as item, i}
          {@const type = item.itemType?.toLowerCase()}
          {@const perks = item.perks}
          {@const tier = GetRomanFromNumber(item.tier)}
          <tr
            class="cursor-pointer border-y-2 border-stone-500 border-opacity-30 bg-cover bg-center bg-no-repeat hover:bg-contract-item"
            on:click={(e) => goToItem(e, item)}
          >
            <td class="">
              <div
                class="flex w-max min-w-0 max-w-full flex-nowrap place-items-center gap-2 place-self-start whitespace-nowrap"
              >
                <a
                  href="https://nwdb.info/db/item/{item.itemKey.toLowerCase()}?gs={item.gearScore}&perks={perks
                    .map((perk) => perk.id.toLowerCase())
                    .join(',')}"
                  class="flex aspect-square w-10 shrink-0 place-content-center place-items-center bg-contain bg-center bg-no-repeat
              {type !== 'resource' && type !== 'housingitem'
                    ? `bg-item-rarity-square-${item.rarity ?? 0}`
                    : `bg-item-rarity-circle-${item.rarity ?? 0}`}"
                  target="_blank"
                >
                  <img
                    src={replaceLynshineSrc(item.iconPath?.replaceAll('\\', '/'))}
                    alt=""
                    class="aspect-square w-[90%]"
                  />
                </a>
                <div class="min-w-0 overflow-clip">
                  {item.name}
                </div>
              </div>
            </td>
            <td class="text-right">
              {new Intl.NumberFormat('en-US', {
                minimumFractionDigits: 2,
              }).format(item.price / 100)}
            </td>
            <td class="text-center">
              {tier}
            </td>
            <td class="text-center">
              {item.gearScore}
            </td>
            <td class="whitespace-nowrap">
              {perks
                .filter((perk) => perk.type === 'Inherent')
                .map((perk) => {
                  const perkMulti = ItemPerkScaling(perk.scaling, item.gearScore)
                  let str = ''
                  if (perk.affixes)
                    for (const [att, val] of Object.entries(perk.affixes)) {
                      if (val) str = `${str ? `${str} ,` : ''} ${att.toUpperCase()} ${Math.floor(val * perkMulti)}`
                    }
                  return str
                })}
            </td>
            <td class="w-full max-w-[8rem]">
              <div class="flex w-full flex-nowrap place-items-center gap-1">
                {#each perks as perk}
                  {#if perk.type !== 'Gem'}
                    <a href="https://nwdb.info/db/perk/{perk.id.toLowerCase()}?gs={item.gearScore}" class="w-6">
                      <img src={replaceLynshineSrc(perk.iconPath)} alt="" class="" />
                    </a>
                  {/if}
                {/each}
              </div>
            </td>
            <td class="">
              <div class="flex w-7 place-content-center place-items-center">
                {#each perks as perk}
                  {#if perk.type === 'Gem'}
                    <a href="https://nwdb.info/db/perk/{perk.id.toLowerCase()}">
                      <img src={replaceLynshineSrc(perk.iconPath)} alt="" class="" />
                    </a>
                  {/if}
                {/each}
              </div>
            </td>
            <td class="text-right">
              {item.quantity}
            </td>
            <td class="whitespace-nowrap">
              <div use:handleExpiration={{ queryDate: item.queryDate, expirationSec: item.expirationSec }}></div>
            </td>
          </tr>
        {/each}
      {/await}
    </tbody>
  </table>
</div>

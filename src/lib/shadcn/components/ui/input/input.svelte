<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements'
  import { cn } from '$lib/shadcn/utils.js'
  import type { InputEvents } from './index.js'

  type $$Props = HTMLInputAttributes & { files?: FileList; el?: HTMLInputElement | undefined }
  type $$Events = InputEvents

  let { class: className, files = $bindable(), value = $bindable(), el = $bindable(), ...restProps }: $$Props = $props()
</script>

{#if restProps.type === 'file'}
  <input
    class={cn(
      'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      className,
    )}
    type="file"
    bind:files
    bind:this={el}
    {...restProps}
  />
{:else}
  <input
    class={cn(
      'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      className,
    )}
    bind:value
    bind:this={el}
    {...restProps}
  />
{/if}

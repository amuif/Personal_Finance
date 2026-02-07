<script lang="ts">
  import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/svelte";

  import * as Sidebar from "$lib/components/ui/sidebar/index.js";

  let {
    items,
  }: { items: { name: string; url: string; icon: IconSvgElement }[] } =
    $props();
</script>

<Sidebar.Group class="group-data-[collapsible=icon]:hidden">
  <Sidebar.GroupLabel>Insights</Sidebar.GroupLabel>
  <Sidebar.Menu>
    {#each items as item (item.name)}
      <Sidebar.MenuItem>
        <Sidebar.MenuButton>
          {#snippet child({ props })}
            <a {...props} href={item.url}>
              <HugeiconsIcon icon={item.icon} />
              <span>{item.name}</span>
            </a>
          {/snippet}
        </Sidebar.MenuButton>
      </Sidebar.MenuItem>
    {/each}
  </Sidebar.Menu>
</Sidebar.Group>

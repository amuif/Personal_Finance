<script lang="ts">
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import type { IconSvgElement } from "@hugeicons/svelte";
  import { page } from "$app/state";

  let {
    items,
  }: { items: { title: string; url: string; icon: IconSvgElement }[] } =
    $props();
</script>

<Sidebar.Group>
  <Sidebar.GroupContent class="flex flex-col gap-2">
    <Sidebar.GroupLabel>Tracking</Sidebar.GroupLabel>
    <Sidebar.Menu>
      {#each items as item (item.title)}
        <Sidebar.MenuItem>
          <Sidebar.MenuButton
            class={item.url === page.url.pathname.toString()
              ? "bg-primary! text-white dark:text-black"
              : ""}
          >
            {#snippet child({ props })}
              <a {...props} href={item.url}>
                <HugeiconsIcon icon={item.icon} />
                <span>{item.title}</span>
              </a>
            {/snippet}
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
      {/each}
    </Sidebar.Menu>
  </Sidebar.GroupContent>
</Sidebar.Group>

<script lang="ts">
import { HugeiconsIcon } from '@hugeicons/svelte';
import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import type { IconSvgElement} from "@hugeicons/svelte";

	let { items }: { items: { title: string; url: string; icon?: IconSvgElement}[] } = $props();
</script>

<Sidebar.Group>
	<Sidebar.GroupContent class="flex flex-col gap-2">
  <Sidebar.GroupLabel>Tracking</Sidebar.GroupLabel>
	<Sidebar.Menu>
			{#each items as item (item.title)}
				<Sidebar.MenuItem>
					<Sidebar.MenuButton tooltipContent={item.title}>
						{#if item.icon}
							<HugeiconsIcon icon={item.icon} />
						{/if}
						<span>{item.title}</span>
					</Sidebar.MenuButton>
				</Sidebar.MenuItem>
			{/each}
		</Sidebar.Menu>
	</Sidebar.GroupContent>
</Sidebar.Group>

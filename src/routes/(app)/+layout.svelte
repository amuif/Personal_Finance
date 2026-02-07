<script lang="ts" module>
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import AppSidebar from "$lib/components/app-sidebar.svelte";
  import SiteHeader from "$lib/components/site-header.svelte";
  import { goto } from "$app/navigation";
</script>

<script lang="ts">
  export let data;
  const { session, cookieToken } = data;
  if (!session || !cookieToken) {
    goto("/login");
  }
  const user = session.user;
</script>

<Sidebar.Provider
  style="--sidebar-width: calc(var(--spacing) * 72); --header-height: calc(var(--spacing) * 12);"
>
  <AppSidebar variant="default" {user} />
  <Sidebar.Inset>
    <SiteHeader />
    <slot />
  </Sidebar.Inset>
</Sidebar.Provider>

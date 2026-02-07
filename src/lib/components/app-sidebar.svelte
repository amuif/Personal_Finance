<script lang="ts">
  import NavMain from "./nav-main.svelte";
  import NavUser from "./nav-user.svelte";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import type { ComponentProps } from "svelte";
  import {
    SchoolReportCardIcon,
    FolderCheckIcon,
    CheckListIcon,
    AnalyticsUpFreeIcons,
    DashboardSquare03Icon,
    Route01FreeIcons,
    UserAccountIcon,
  } from "@hugeicons/core-free-icons";
  import NavPlanning from "./nav-planning.svelte";
  import NavInsights from "./nav-insights.svelte";
  import type { User } from "better-auth/types";

  const data = {
    navInsights: [
      {
        name: "Analytics",
        url: "#",
        icon: AnalyticsUpFreeIcons,
      },
      {
        name: "Report",
        url: "#",
        icon: SchoolReportCardIcon,
      },
    ],
    documents: [
      {
        name: "Budget",
        url: "#",
        icon: FolderCheckIcon,
      },
      {
        name: "Plan",
        url: "#",
        icon: CheckListIcon,
      },
    ],
  };

  const navMain = [
    {
      title: "Dashboard",
      url: "#",
      icon: DashboardSquare03Icon,
    },
    {
      title: "Track Expenses",
      url: "#",
      icon: Route01FreeIcons,
    },
    {
      title: "Accounts",
      url: "#",
      icon: UserAccountIcon,
    },
  ];

  let {
    user,
    ...restProps
  }: {
    user: User;
    resPrps: ComponentProps<typeof Sidebar.Root>;
  } = $props();
</script>

<Sidebar.Root collapsible="offcanvas" {...restProps}>
  <Sidebar.Header>
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <Sidebar.MenuButton class="data-[slot=sidebar-menu-button]:p-1.5!">
          {#snippet child({ props })}
            <a href="##" {...props}>
              <span class="text-base font-semibold">Clarity</span>
            </a>
          {/snippet}
        </Sidebar.MenuButton>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  </Sidebar.Header>
  <Sidebar.Content>
    <NavMain items={navMain} />
    <NavPlanning items={data.documents} />
    <NavInsights items={data.navInsights} />
  </Sidebar.Content>
  <Sidebar.Footer>
    <NavUser {user} />
  </Sidebar.Footer>
</Sidebar.Root>

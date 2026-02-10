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
        url: "/budget",
        icon: FolderCheckIcon,
      },
      {
        name: "Plan",
        url: "/plan",
        icon: CheckListIcon,
      },
    ],
  };

  const navMain = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: DashboardSquare03Icon,
    },
    {
      title: "Track Expenses",
      url: "/track",
      icon: Route01FreeIcons,
    },
    {
      title: "Accounts",
      url: "/accounts",
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
        <span class="text-lg text-center font-semibold">Clarity</span>
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

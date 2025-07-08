import * as React from 'react';
import {
  IconCamera,
  IconCategory2,
  IconChartBar,
  IconFileAi,
  IconFileDescription,
  IconFolder,
  IconListDetails,
  IconPlus,
  IconSettings,
} from '@tabler/icons-react';

import { NavMain } from '@/components/nav-main';
import { NavSecondary } from '@/components/nav-secondary';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const data = {
  user: {
    name: 'amuif',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Home',
      url: '/dashboard',
      icon: IconCategory2,
    },
    {
      title: 'Create',
      url: '/create',
      icon: IconPlus,
    },
    {
      title: 'Wallet',
      url: 'wallet',
      icon: IconListDetails,
    },
    {
      title: 'Analytics',
      url: 'analytics',
      icon: IconChartBar,
    },
    {
      title: 'Plans',
      url: 'plans',
      icon: IconFolder,
    },
  ],
  navClouds: [
    {
      title: 'Capture',
      icon: IconCamera,
      isActive: true,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Proposal',
      icon: IconFileDescription,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
    {
      title: 'Prompts',
      icon: IconFileAi,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#',
        },
        {
          title: 'Archived',
          url: '#',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Settings',
      url: 'settings',
      icon: IconSettings,
    },
    //   {
    //     title: "Get Help",
    //     url: "#",
    //     icon: IconHelp,
    //   },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className=" flex data-[slot=sidebar-menu-button]:!p-1.5">
              <div className="flex flex-row gap-1">
                <img
                  src="/images/logo.svg"
                  alt="logo"
                  aria-label="logo "
                  className="object-cover h-8 w-8 aspect-square"
                />
                <span className="text-xl font-semibold">Clarity</span>
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

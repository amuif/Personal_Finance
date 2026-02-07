<script lang="ts">
  import CreditCardIcon from "@tabler/icons-svelte/icons/credit-card";
  import DotsVerticalIcon from "@tabler/icons-svelte/icons/dots-vertical";
  import LogoutIcon from "@tabler/icons-svelte/icons/logout";
  import NotificationIcon from "@tabler/icons-svelte/icons/notification";
  import UserCircleIcon from "@tabler/icons-svelte/icons/user-circle";
  import * as Avatar from "$lib/components/ui/avatar/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import type { User } from "better-auth";

  let { user }: { user: User | null } = $props();

  const sidebar = Sidebar.useSidebar();

  $inspect("user", user);
</script>

<Sidebar.Menu>
  <Sidebar.MenuItem>
    {#if !user}
      <Sidebar.MenuButton size="lg">
        <div class="flex items-center gap-2 w-full animate-pulse">
          <!-- Avatar skeleton -->
          <div class="size-8 rounded-lg bg-muted" />

          <!-- Text skeleton -->
          <div class="flex-1 space-y-1">
            <div class="h-3 w-24 rounded bg-muted" />
            <div class="h-2 w-32 rounded bg-muted/70" />
          </div>

          <!-- Dots placeholder -->
          <div class="ms-auto h-4 w-4 rounded bg-muted" />
        </div>
      </Sidebar.MenuButton>
    {:else}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          {#snippet child({ props })}
            <Sidebar.MenuButton
              {...props}
              size="lg"
              class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar.Root class="size-8 rounded-lg grayscale">
                <Avatar.Image src={user.image || ""} alt={user.name} />
                <Avatar.Fallback class="rounded-lg">CN</Avatar.Fallback>
              </Avatar.Root>
              <div class="grid flex-1 text-start text-sm leading-tight">
                <span class="truncate font-medium">{user.name}</span>
                <span class="text-muted-foreground truncate text-xs">
                  {user.email}
                </span>
              </div>
              <DotsVerticalIcon class="ms-auto size-4" />
            </Sidebar.MenuButton>
          {/snippet}
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          class="w-(--bits-dropdown-menu-anchor-width) min-w-56 rounded-lg"
          side={sidebar.isMobile ? "bottom" : "right"}
          align="end"
          sideOffset={4}
        >
          <DropdownMenu.Label class="p-0 font-normal">
            <div class="flex items-center gap-2 px-1 py-1.5 text-start text-sm">
              <Avatar.Root class="size-8 rounded-lg">
                <Avatar.Image src={user.image || ""} alt={user.name} />
                <Avatar.Fallback class="rounded-lg">CN</Avatar.Fallback>
              </Avatar.Root>
              <div class="grid flex-1 text-start text-sm leading-tight">
                <span class="truncate font-medium">{user.name}</span>
                <span class="text-muted-foreground truncate text-xs">
                  {user.email}
                </span>
              </div>
            </div>
          </DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            <DropdownMenu.Item>
              <UserCircleIcon />
              Account
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <CreditCardIcon />
              Billing
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <NotificationIcon />
              Notifications
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>
            <LogoutIcon />
            Log out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    {/if}
  </Sidebar.MenuItem>
</Sidebar.Menu>

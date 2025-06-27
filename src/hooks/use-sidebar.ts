import React from 'react';
// import { type SidebarContextProps } from '@/components/ui/sidebar';
import { SidebarContext } from '@/components/ui/sidebar';
export default function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.');
  }

  return context;
}

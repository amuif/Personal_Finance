import React from 'react';
import { type SidebarContextProps } from '@/components/ui/sidebar';

export const SidebarContext = React.createContext<SidebarContextProps | null>(
  null
);
export default function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.');
  }

  return context;
}

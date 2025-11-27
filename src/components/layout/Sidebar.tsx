import React from 'react';
import { Link } from 'react-router-dom';
import { Home, CreditCard, Store, Settings } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const category = [
  { label: '대시보드', icon: Home, path: '/' },
  { label: '거래 내역', icon: CreditCard, path: '/payments' },
  { label: '가맹점 관리', icon: Store, path: '/merchants' },
  { label: '시스템 설정', icon: Settings, path: '#' },
];

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='offcanvas' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className='data-[slot=sidebar-menu-button]:!p-1.5'>
              <a href='#'>
                <span className='text-base font-semibold'>Allpays.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {category.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton tooltip={item.label}>
                <Link to={item.path} className='flex items-center gap-2'>
                  {item.icon && <item.icon className='w-4 h-4' />}
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

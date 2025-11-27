import { Outlet } from 'react-router-dom';

import AppSidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

function App() {
  return (
    <SidebarProvider>
      <AppSidebar variant='inset' />
      <SidebarInset>
        <Header />
        <main className='p-6'>
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;

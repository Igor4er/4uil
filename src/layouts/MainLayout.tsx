import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function MainLayout() {
  return (
    <SidebarProvider open={true} defaultOpen={true}>
      <AppSidebar />
      <main className="container">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

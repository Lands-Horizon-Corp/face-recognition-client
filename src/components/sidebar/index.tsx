import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Link } from "@tanstack/react-router"
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup >
            <SidebarMenu>
                <SidebarMenuItem>
                    <Link to="/identify-face">Face Recognition</Link>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <Link to="/add-face">Add Face</Link>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}


export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar />

      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
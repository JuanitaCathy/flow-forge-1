"use client";

import { DashboardSidebar } from "@/components/dashboard-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = usePathname();
  const breadcrumbSegments = location
    .split("/")
    .filter(Boolean)
    .map((segment) =>
      segment.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()),
    );

  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
          <div className="flex items-center">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbSegments.map((segment, index) => (
                  <>
                    {index === breadcrumbSegments.length - 1 ? (
                      <BreadcrumbItem key={`${index} ${segment}`}>
                        <BreadcrumbPage>{segment}</BreadcrumbPage>
                      </BreadcrumbItem>
                    ) : (
                      <>
                        <BreadcrumbItem key={`${index} ${segment}`}>
                          <BreadcrumbLink
                            href={`/${breadcrumbSegments
                              .slice(0, index + 1)
                              .join("/")
                              .toLowerCase()}`}
                          >
                            {segment}
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator
                          key={`${index} ${segment} separator`}
                        />
                      </>
                    )}
                  </>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

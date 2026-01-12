import type { Metadata } from "next";
import AdminHeader from "@/components/admin/header";

export const metadata: Metadata = {
  title: "Admin - Food Truck Parts",
  description: "Admin dashboard for Food Truck Parts",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <AdminHeader/>
    {children}
  </>;
}

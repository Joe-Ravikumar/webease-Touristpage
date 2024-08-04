"use client";

import ProfileSidebar from "@/components/sidebars/ProfileSidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full fixed top-0 left-0 right-0 bg-white ">
      {/* sidebar */}
      <ProfileSidebar />
      {/* main conten  */}
      <div className=" flex-1 overflow-auto h-full">{children}</div>
    </div>
  );
}

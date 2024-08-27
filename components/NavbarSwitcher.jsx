
"use client"; // Ensure this is a Client Component

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";

export default function NavbarSwitcher() {
  const pathname = usePathname();
  return pathname === "/home2" ? <Navbar2 /> : <Navbar />;
}

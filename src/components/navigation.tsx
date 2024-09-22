"use client";

import { usePathname } from "next/navigation";
import { NavButton } from "./nav-button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMedia } from "react-use";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
const routes = [
  {
    id: 1,
    href: "/",
    label: "Overview",
  },
  {
    id: 2,
    href: "/transactions",
    label: "Transactions",
  },
  {
    id: 3,
    href: "/accounts",
    label: "Accounts",
  },
  {
    id: 4,
    href: "/categories",
    label: "Categories",
  },
  {
    id: 5,
    href: "/settings",
    label: "Settings",
  },
];
export const Navigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const isMobile = useMedia("(max-width: 1024px)", false);

  console.log(pathname);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
          >
            <MenuIcon className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route) => (
              <Button
                variant={route.href === pathname ? "secondary" : "ghost"}
                key={route.id}
                onClick={() => onClick(route.href)}
                className="w-full justify-start"
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }
  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route) => (
        <NavButton
          key={route.id}
          href={route.href}
          label={route.label}
          isActive={pathname === "route.href"}
        />
      ))}
    </nav>
  );
};

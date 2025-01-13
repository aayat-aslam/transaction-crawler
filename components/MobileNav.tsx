'use client';
import {
    Sheet, SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import {sidebarLinks} from "@/constants/constants";
import {cn} from "@/lib/utils";
import React from "react";
import {usePathname} from "next/navigation";

const MobileNav = ({user}: MobileNavProps) => {
    const pathname = usePathname();
    return (
        <section className="w-full max-w-[26px]">
            <Sheet>
                <SheetTrigger>
                    <Image
                        src="/icons/hamburger.svg"
                        alt="menu"
                        width={30}
                        height={30}
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-white">
                    <Link href="/" className="mb-12 cursor-pointer items-center gap-1 px-4 flex">
                        <Image
                            src="/icons/logo.svg"
                            alt="Transaction Crawler logo"
                            width={34}
                            height={34}
                        />
                        <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Dashboard</h1>
                    </Link>
                    <div className="mobilenav-sheet">
                        <SheetClose>
                            <nav className="flex flex-col gap-6 pt-16 text-white">
                                {
                                    sidebarLinks.map((item) => {
                                        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                                        return (
                                            <SheetClose asChild key={item.route}>
                                                <Link href={item.route}
                                                      key={item.label}
                                                      className={cn('mobilenav-sheet_close w-full', {'bg-bank-gradient': isActive})}>
                                                    <Image
                                                        src={item.imgURL}
                                                        alt={item.label}
                                                        width={20}
                                                        height={20}
                                                        className={cn({'brightness-[3] invert-0': isActive})}
                                                    />
                                                    <p className={cn('text-16 font-semibold text-black-2', {'text-white': isActive})}>
                                                        {item.label}
                                                    </p>
                                                </Link>
                                            </SheetClose>
                                        )
                                    })
                                }

                                <div className="text-orange-500">USER</div>
                            </nav>
                        </SheetClose>
                    </div>
                        <div className="text-orange-500">FOOTER</div>
                </SheetContent>
            </Sheet>
        </section>
    )
}
 export  default MobileNav;
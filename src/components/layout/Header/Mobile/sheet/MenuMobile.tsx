"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTranslations } from 'next-intl';

const MenuMobile = () => {
    const t = useTranslations('header');

    return (
        <Sheet>
            <SheetTrigger asChild>

            </SheetTrigger>
            <SheetContent side="bottom" className="p-4 h-[80dvh]">

            </SheetContent>
        </Sheet>
    );
}

export default MenuMobile;
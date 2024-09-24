"use client";
import CommandSearchBar from "@/components/layout/Header/CommandSearchBar/CommandSearchBar";
import MenuMobile from "./sheet/MenuMobile";

const HeaderMobile = () => {
    return (
        <header className="fixed bottom-0 left-0 right-0 bg-background grid grid-cols-3 md:hidden justify-between z-50 border-t border-mutedLight-foreground min-h-[8dvh]">
            <div className="border-r border-mutedLight-foreground flex justify-center items-center">
                <MenuMobile />
            </div>
            <div className="flex justify-center items-center">
                <CommandSearchBar mobile />
            </div>
        </header>
    );
}

export default HeaderMobile;
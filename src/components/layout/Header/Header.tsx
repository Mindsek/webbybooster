"use client"
import CommandSearchBar from "@/components/layout/Header/CommandSearchBar/CommandSearchBar";
import { useHeader } from "@/components/layout/Header/Header.logic";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import HeaderMobile from "./Mobile/HeaderMobile";

interface HeaderProps {
    folderId?: string
}

const Header = (props: HeaderProps) => {
    const logic = useHeader();

    return (
        <nav className="gap-4">
            <div className="hidden md:flex items-center justify-between bg-background p-2 rounded-md">
                <div className="flex items-center gap-2">
                    <CommandSearchBar />
                    <Button variant="outline">
                        <SlidersHorizontal className="min-w-6 min-h-6 text-muted-foreground" />
                    </Button>
                </div>
            </div>
            <HeaderMobile />
        </nav>
    )
}

export default Header
"use client";
import { Button } from "@/components/ui/button";
import {
    CommandDialog,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "@/components/ui/command";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import useMenuActive from "@/hooks/useMenuActive";
import { useNavigationItems } from "@/hooks/useNavigationItems";
import { Command as CommandIcon, Search } from "lucide-react";
import Link from "next/link";
import { useCommandSearchBar } from "./CommandSearchBar.logic";

interface CommandSearchBarProps {
    mobile?: boolean;
}

const CommandSearchBar = ({ mobile = false }: CommandSearchBarProps) => {
    const logic = useCommandSearchBar();
    const navigation = useNavigationItems();

    return (
        <>
            {
                mobile ? <Button variant="transparent" className="flex flex-col items-center w-full h-full" onClick={() => logic.setOpen(true)}>
                    <Search className="min-w-4 min-h-4 max-w-6 max-h-6 text-muted-foreground" />
                    <span className="text-xs">Search</span>
                </Button>
                    :
                    <div className="flex items-center rounded-md border px-2">
                        <Search className="w-4 h-4 text-muted-foreground" />
                        <Input placeholder={logic.t('command_input_placeholder')} onFocus={() => logic.setOpen(true)} className="border-none bg-transparent min-w-60 text-sm" />
                        <div className="hidden lg:flex items-center justify-center gap-0.5 bg-secondary rounded-md px-1 py-0.5">
                            <CommandIcon className="w-3 h-3 text-muted-foreground" />
                            <span className="text-muted-foreground text-xs">K</span>
                        </div>
                    </div>
            }
            <CommandDialog open={logic.open} onOpenChange={(isOpen) => logic.setOpen(isOpen)}>
                <DialogTitle className="hidden">
                    {logic.t('title')}
                </DialogTitle>
                <DialogDescription className="hidden">
                    {logic.t('description')}
                </DialogDescription>
                <CommandInput placeholder={logic.t('command_input_placeholder_focus')} />
                <CommandList className="h-full max-h-[800px]">
                    {
                        navigation.map((group, index) => (
                            <CommandGroup key={index} heading={group.group}>
                                {group.items.map((item, index) => {
                                    // eslint-disable-next-line react-hooks/rules-of-hooks
                                    const isActive = useMenuActive(item.link);
                                    return (
                                        <CommandItem key={index} className={`cursor-pointer ${isActive ? "bg-primary text-background hover:bg-primary/90" : "hover:bg-accent"}`}>
                                            <Link href={item.link} className="flex items-center gap-2 w-full">
                                                {item.icon}
                                                <span>{item.label}</span>
                                            </Link>
                                        </CommandItem>
                                    );
                                })}
                            </CommandGroup>
                        ))
                    }
                </CommandList>
            </CommandDialog>
        </>
    );
};

export default CommandSearchBar;
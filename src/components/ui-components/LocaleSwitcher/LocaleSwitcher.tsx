import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import Image from "next/image";
import { useLocaleSwitcher } from "./LocaleSwitcher.logic";

export const LocaleSwitcher = () => {
    const logic = useLocaleSwitcher();
    return (
        <Select onValueChange={logic.handleLocaleChange} defaultValue={logic.imageLocale.locale}>
            <SelectTrigger className="flex items-center border w-auto">
                <SelectValue placeholder="Select a Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Language</SelectLabel>
                    {logic.languages.map((language) => (
                        <SelectItem key={language.locale} value={language.locale}>
                            <div className="flex items-center gap-2">
                                <Image src={language.icon} alt={language.alt} width={20} height={20} className="w-6 h-6" />
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
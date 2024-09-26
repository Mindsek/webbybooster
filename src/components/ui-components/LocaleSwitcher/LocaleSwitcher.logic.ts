"use client";
import { Locale } from "@/constants/international";
import { setLocale } from "@/i18n/locale";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from 'react';
const languages = [
    {
        locale: "en",
        label: "English",
        icon: "http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg",
        alt: "United Kingdom",
    },
    {
        locale: "fr",
        label: "Français",
        icon: "http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg",
        alt: "France",
    },
];

export const useLocaleSwitcher = () => {
    const locale = useLocale();
    const imageLocale = locale === "en" ? languages[0] : languages[1];
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const handleLocaleChange = async (newLocale: Locale) => {
        await setLocale(newLocale);
        startTransition(() => {
            router.refresh();
        });
    }
    return {
        languages,
        handleLocaleChange,
        imageLocale,
        isPending,
    }

};
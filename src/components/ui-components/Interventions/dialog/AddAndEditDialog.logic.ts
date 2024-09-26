import { useTranslations } from "next-intl";


export const useAddAndEditDialog = () => {
    const t = useTranslations("interventions");
    return {
        t,
    }
};
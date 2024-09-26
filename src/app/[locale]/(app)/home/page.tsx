import KanbanTasks from "@/components/ui-components/KanbanTasks/KanbanTasks";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const Page = () => {
    return <KanbanTasks />;
};

export default Page;

export const generateMetadata = async ({
    params: { locale },
}: {
    params: { locale: string };
}): Promise<Metadata> => {
    const t = await getTranslations({ locale, namespace: "metadata" });

    return {
        title: t("home"),
    };
};
import Interventions from "@/components/ui-components/Interventions/Interventions";
import KanbanTasks from "@/components/ui-components/KanbanTasks/KanbanTasks";
import { SpaceY16 } from "@/components/wrapper/SpaceY16";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const Page = () => {
    return (
        <SpaceY16>
            <KanbanTasks height="h-[30dvh]" />
            <Interventions />
        </SpaceY16>
    );
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
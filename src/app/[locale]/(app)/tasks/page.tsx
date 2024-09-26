import KanbanTasks from "@/components/ui-components/KanbanTasks/KanbanTasks";
import StickyNote from "@/components/ui-components/StickyNote/StickyNote";
import { SpaceY16 } from "@/components/wrapper/SpaceY16";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const Page = () => {
  return (
    <SpaceY16>
      <KanbanTasks />
      <StickyNote />
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
    title: t("tasks"),
  };
};
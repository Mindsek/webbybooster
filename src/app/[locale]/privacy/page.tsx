import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const PrivacyPage = () => {
  return (
    <div>
      <h1>Privacy</h1>
    </div>
  )
};

export default PrivacyPage;

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("privacy"),
  };
};
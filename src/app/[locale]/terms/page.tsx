import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const TermsPage = () => {
  return (
    <div>
      <h1>Terms</h1>
    </div>
  )
};

export default TermsPage;

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("terms"),
  };
};

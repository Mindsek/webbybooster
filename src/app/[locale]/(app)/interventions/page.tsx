import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const Page = () => {
    return (
        <div>
            <h1>interventions</h1>
        </div>
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
        title: t("interventions"),
    };
};
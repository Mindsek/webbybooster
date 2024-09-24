import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const HomePage = () => {
    return (
        <div>
            <h1>home</h1>
        </div>
    );
};

export default HomePage;

export const generateMetadata = async ({
    params: { locale },
}: {
    params: { locale: string };
}): Promise<Metadata> => {
    const t = await getTranslations({ locale, namespace: "metadata" });

    return {
        title: t("missions_contracts"),
    };
};
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
        </div>
    )
}

export default LoginPage

export const generateMetadata = async ({
    params: { locale },
}: {
    params: { locale: string };
}): Promise<Metadata> => {
    const t = await getTranslations({ locale, namespace: "metadata" });

    return {
        title: t("login"),
    };
};

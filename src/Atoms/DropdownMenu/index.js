import React, {useState} from "react";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

const languages = ["ru", "en", "se"];

export default function DropdownMenu() {

    const [language, setLanguage] = useState("ENGLISH");
    const [active, setActive] = useState(false);

    const {t, i18n} = useTranslation();

    const onClick = (element) => {
        setLanguage(element);
        i18n.changeLanguage(element);
    }

    return (
        <div
            className={`${styles.languages} ${active ? styles.languages_active : ""}`}
            onClick={() => setActive(!active)}
        >
            <div>{language}</div>
            <ul className={`${styles.languages_list}`}>
                {languages.filter(element => element !== language)
                    .map((element) =>
                        <li key={element}
                            onClick={() => onClick(element)}>{t(element)}</li>
                    )}

            </ul>
            <div>{t("TEXT")}</div>
        </div>
    );
}

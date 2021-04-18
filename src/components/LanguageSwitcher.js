import React from "react";
import { useTranslation } from "react-i18next";
import "../services/i18n";
import US_Flag from "../images/flags/US.png"
import FR_Flag from "../images/flags/FR.png"
import ES_Flag from "../images/flags/ES.png"

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const { t } = useTranslation();

    function handleClick(e) {
        e.preventDefault();
        //console.log(e.target.id);
        var lang = e.target.id;
        i18n.changeLanguage(lang);
    }
    return (
        <div>
            <ul class="nav navbar-nav navbar-right dropdown">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle language" rel="en" data-toggle="dropdown">
                        {t("lang")}<b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="#" id="en" class="dropdown-toggle language" onClick={handleClick}><img src={US_Flag} /> English</a></li>
                        <li><a href="#" id="fr" class="dropdown-toggle language" onClick={handleClick}><img src={FR_Flag} /> Français</a></li>
                        <li><a href="#" id="es" class="dropdown-toggle language" onClick={handleClick}><img src={ES_Flag} /> Español</a></li>
                    </ul>
                </li>
            </ul>

        </div >
    );
}
export default LanguageSwitcher;
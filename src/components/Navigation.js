import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from "./LanguageSwitcher";
import Page_Logo from "../images/assets/img/LOGO.png"
// Translation Services
import { useTranslation } from "react-i18next";
import "../services/i18n";

function Navigation() {
    const { t } = useTranslation(); 
    return (
            <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-transparent" role="navigation" id="mainNav" >
            <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <Link to={'./home'}>
              <a class="navbar-brand">
                <img src={Page_Logo} width="50" class="image-fluid App-logo" alt="" />
              </a>
            </Link>
                <ul className="nav navbar-nav">
                  <li className="active">
                  <Link to={'/home'}>
                  <a>{t("nav_bar.str_home")}</a>
                  </Link>
                  </li>
                  <li>
                  <Link to={'/projects'}>
                  <a>{t("nav_bar.str_projects")}</a>
                  </Link>
                  </li>
                  <li>
                  <Link to={'/solutions'}>
                  <a>{t("nav_bar.str_competences")}</a>
                  </Link>
                  </li>
                  <li>
                  <Link to={'/news'}>
                  <a>{t("nav_bar.str_news")}</a>
                  </Link>
                  </li>
                  <li>
                  <Link to={'/about'}>
                  <a>{t("nav_bar.srt_about")}</a>
                  </Link>
                  </li>
                  <li>
                  <Link to={'/contact'}>
                    <a>{t("nav_bar.srt_contact")}</a>
                  </Link>
                    </li>
                </ul>
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        )
  
}

export default Navigation;
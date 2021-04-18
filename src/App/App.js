import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import Navigation from "../components/Navigation";

// Css and Js
import "./css/styles.css"
import "./css/coming-sssoon.css"

// Pages
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import Projects from "./pages/projects/projects";
import About from "./pages/about/about";
import News from "./pages/news/news";
import Competences from "./pages/competences/competences";

  // Projects
  import Project_1 from "./pages/projects/project_1/project";
  import Project_2 from "./pages/projects/project_2/project";

// Translation Services
import { useTranslation } from "react-i18next";
import "../services/i18n";

function App() {
  const { t } = useTranslation(); 
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path='/'
            render={(props) => (
            <Home {...props} 
            translation={t("home", {returnObjects: true})} />
          )}
          />
          <Route path='/home' 
            render={(props) => (
              <Home {...props} 
              translation={t("home", {returnObjects: true})} />
            )}
          />
          <Route path='/contact'
          render={(props) => (
            <Contact {...props} 
            translation={t("contact", {returnObjects: true})} />
          )}
          />
          <Route path='/projects'
          render={(props) => (
            <Projects {...props} 
            translation={t("projects", {returnObjects: true})} />
          )}
          />
          <Route path='/project_1'
          render={(props) => (
            <Project_1 {...props} 
            translation={t("projects", {returnObjects: true})} />
          )}
          />
          <Route path='/project_2'
          render={(props) => (
            <Project_2 {...props} 
            translation={t("projects", {returnObjects: true})} />
          )}
          />
          <Route path='/about'
          render={(props) => (
            <About {...props} 
            translation={t("about", {returnObjects: true})} />
          )}
          />
          <Route path='/news'
          render={(props) => (
            <News {...props} 
            translation={t("news", {returnObjects: true})} />
          )}
          />
          <Route path='/solutions'
          render={(props) => (
            <Competences {...props} 
            translation={t("competences", {returnObjects: true})} />
          )}
          />
        </Switch>
      </div>
    );
  
}

export default App;
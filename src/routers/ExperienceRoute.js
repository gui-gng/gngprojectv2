import React from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import CastPage     from '../components/experience/CastPage';
import EricssonPage from '../components/experience/EricssonPage';
import NordicaPage  from '../components/experience/NordicaPage';
import NetawarePage from '../components/experience/NetawarePage';
import ExperienceNav from "../components/ExperienceNav";

const ExperiencePage = () => (
    <div>  
        <ExperienceNav />
        <div id="experience_content">
        <Switch>
            <Route path="/experience/cast" component={CastPage} />
            <Route path="/experience/ericsson" component={EricssonPage} />
            <Route path="/experience/nordica" component={NordicaPage} />
            <Route path="/experience/netaware" component={NetawarePage} />
        </Switch>
        </div>
        
    </div>
);

export default ExperiencePage;

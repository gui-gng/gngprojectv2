import React from 'react';
import { NavLink } from 'react-router-dom';

const ExperienceNav = () => (
    <div className="pt-3">
        <div className="h-100 w-100 pt-3 pb-1 row m-0 justify-content-center experienceNav">
            <NavLink className="nav-link p-0 h-100" to="/experience/cast" activeClassName="is-active">
                <div className="col p-3 bg-red itemExperience  h-100">
                    <div className="pt-3 align-self-center bg-light text-center rounded">
                        <img className="mb-2" src="/images/logoCast.png" height="60px" />
                        <h4 className="border-top text-secondary">03.2012 – 06.2012</h4>
                    </div>
                    <div className="experience_nav_desc text-white bg-dark p-3 mb-3">
                        Create and test computer programs, setting the standards required for development,
                        based on the definitions provided in the analysis phase of systems and using methods and
                        techniques appropriate to the equipment and applications for which they are intended.
                    </div>
                </div>
            </NavLink>
            <NavLink className="nav-link p-0 h-100" to="/experience/ericsson" activeClassName="is-active">
                <div className="col p-3 bg-darkblue itemExperience h-100">
                    <div className="pt-3 align-self-center bg-light text-center rounded">
                        <img className="mb-2" src="/images/logoEricsson.png" height="60px" />
                        <h4 className="border-top text-secondary">10.2012 - 02.2017</h4>
                    </div>
                    <div className="experience_nav_desc text-white bg-dark p-3 mb-3">
                        Administration/Analysis/Development in Qlikview/SQL Server projects.
                        The projects in Qlikview was focused in support the projects/clients from Latin America
                    </div>
                </div>
            </NavLink>
            <NavLink className="nav-link p-0 h-100" to="/experience/nordica" activeClassName="is-active">
                <div className="col p-3 bg-green itemExperience h-100">
                    <div className="pt-3 align-self-center bg-light text-center rounded">
                        <img className="mb-2" src="/images/logoNordica.png" height="60px" />
                        <h4 className="border-top text-secondary">10.2016 - 02.2017</h4>
                    </div>
                    <div className="experience_nav_desc text-white bg-dark p-3 mb-3">
                        Analysis/Development in Qlikview using SQL Server and Teradata.
                        Create analysis for high-level focused in create dashboards with a deep analysis using the data from IMS and CloseUp
                    </div>
                </div>
            </NavLink>
            <NavLink className="nav-link p-0 h-100" to="/experience/netaware" activeClassName="is-active">
                <div className="col p-3 bg-orange itemExperience h-100">
                    <div className="pt-3 align-self-center bg-dark text-center rounded">
                        <img className="mb-2" src="/images/logoNetaware.png" height="60px" />
                        <h4 className="border-top text-white">10.2018 – Current</h4>
                    </div>
                    <div className="experience_nav_desc text-white bg-dark p-3 mb-3">
                        Server administration//Web development/Set up computers/Sell services.
                        Focused in maintain the servers and infrastructure of our clients and besides that find new
                        customers.
                    </div>
                </div>
            </NavLink>

        </div>
    </div>
);

export default ExperienceNav;

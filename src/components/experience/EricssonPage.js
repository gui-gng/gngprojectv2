import React from 'react';

const EricssonPage = () => (
  <div className="container pt-5 w-100">

    <div className="row justify-content-center subtitle">
      <div className="col-12 align-self-center fadeIn animated">
        <p>
          Administration/Analysis/Development in Qlikview/SQL Server projects.
          The projects in Qlikview was focused in support the projects/clients from Latin America
      </p>
      </div>
    </div>
    <div className="row">
      <div className="col fadeInLeft animated col_ericsson_box">
        <div className="card text-white bg-dark mb-3 h-100 border-0">
          <div className="card-header text-center">Professional Experiences</div>
          <div className="card-body bg-secondary p-3 border-0  rounded-bottom">
            -Almost daily contact with Latin America countries;<br />
            -3 business trips to México to develop new projects to the biggest Ericsson clients in Latin America (Telcel,
          America Movil, Movistar and Telmex);<br />
            -Business trip to Rio de Janeiro to develop new projects to Claro;<br />
            -Some others projects developed remotely to Brazil, Panama, Colombia, México, Costa Rica, Venezuela, Chile,
            Bolivia, Nicaragua and some Islands in Caribbean.
        </div>
        </div>
      </div>
      <div className="col fadeInRight animated col_ericsson_box">
        <div id="ericssonTools" className="card bg-light mb-3 h-100 border-0 rounded">
          <div className="card-header bg-dark pb-2">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className="nav-link text-white active" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true" href="#toolsExcel">Excel</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " data-toggle="tab" role="tab" aria-controls="home" aria-selected="true" href="#toolsQlikview">Qlikview</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " data-toggle="tab" role="tab" aria-controls="home" aria-selected="true" href="#toolsSQLServer">SQL
                Server</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " data-toggle="tab" role="tab" aria-controls="home" aria-selected="true" href="#toolsCSharp">
                  C#.NET</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " data-toggle="tab" role="tab" aria-controls="home" aria-selected="true" href="#toolsJava">Java/C#</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white " data-toggle="tab" role="tab" aria-controls="home" aria-selected="true" href="#toolsExamples"><i className="fas fa-images text-white"></i></a>
              </li>
            </ul>
          </div>

          <div className="card-body bg-secondary text-white rounded-bottom">
            <div id="toolsExcel" className="tab-pane collapse fadeIn animated show active" role="tabpanel">
              Used in to validated and to extract the logics previously developed with the objective to transcript into
              qlikview
          </div>
            <div id="toolsQlikview" className="tab-pane collapse fadeIn animated" role="tabpanel">
              -Deep knowledgment of the tool; <br />
              -Creation of automatic reports;<br />
              -Development of custom objects; <br />
              -Qlikview Server;<br />
              -Data structure;<br />
            </div>
            <div id="toolsSQLServer" className="tab-pane collapse fadeIn animated" role="tabpanel">
              -Main functions(Search/Insert/Delete data);<br />
              -Users maintenance;<br />
              -Triggers;<br />
              -Schedules;<br />
            </div>
            <div id="toolsCSharp" className="tab-pane collapse fadeIn animated" role="tabpanel">
              -Login interface;<br />
              -Custom interface connected with qlikview authentication;
          </div>
            <div id="toolsJava" className="tab-pane collapse fadeIn animated" role="tabpanel">
              -Data extractor (Login in the system, Download xmls and upload to database)<br />
              -Read the data from the xml/excel and store into SQL Server;
          </div>
            <div id="toolsExamples" className="tab-pane collapse fadeIn animated" role="tabpanel">
              <div className="row">
                <div className="col">
                  <div className="showImg">
                    <img className="img-fluid" src="../images/ericsson/Summary.png" />
                  </div>
                </div>

                <div className="col">
                  <div className="showImg">
                    <img className="img-fluid" src="../images/ericsson/NetSales.png" />
                  </div>
                </div>

                <div className="col">
                  <div className="showImg">
                    <img className="img-fluid" src="../images/ericsson/CPM Allocation.png" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
);

export default EricssonPage;

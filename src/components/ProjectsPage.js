import React from 'react';

const ProjectsPage = () => (
  <div className="row p-3">
    <div className="col">
      <a href="http://www.netaware.com.au" target="_blank">
        <div className="p-3 align-self-center bg-dark text-center rounded">
          <img className="mb-2" src="/images/logoNetaware.png" height="60px" />
        </div>
      </a>
    </div>
    <div className="col">
      <a href="https://www.evaluatz.com/stocks" target="_blank">
        <div className="p-3 align-self-center bg-dark text-center rounded">
          <img className="mb-2" src="/images/logoEvaluatz.png" height="60px" />
        </div>
      </a>
    </div>
  </div>
);

export default ProjectsPage;

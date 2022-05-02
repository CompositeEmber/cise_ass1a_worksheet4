import React from "react";

import{Redirect} from 'react-router';

import Home from "./pages/Home";
import SEPractice from "./pages/SEPractice";
import SubmitArticle from "./pages/SubmitArticle"; 
import NotFoundPage from "./pages/404";

const App = () =>  {
    return (
        <Router>
        <div>
          <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
            <ul className="header">
                <li><a href = "/">Home</a></li>
                <li><a href = "/SEPractice">Select the Practice</a></li>
                <li><a href = "/SubmitArticle">Submit an Article</a></li>
            </ul>
          <div className="content">
            
          </div>
        </div>
        </Router>
    );
}
 
export default App;

import React from "react";
import loadinggif from "./assets/loaders/threed.gif";
import Nav from "./Nav";
const Loading = (props) => {
return (
    <div className="Home ">
      <Nav text={props.search}></Nav>
      <div className="autoHeight movDet">
        <div className="row">
          <div className="col s12">
            {" "}
            <img src={loadinggif} alt="loading..." />
            <h3><i>Loading....</i></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
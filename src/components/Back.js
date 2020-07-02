import React from "react";
import { withRouter } from "react-router-dom";

const Back = ({ history }) => (
  <div
    className="waves-effect waves-light btn"
    color="lighten-3"
    onClick={history.goBack}
  >
    Go Back
  </div>
);

export default withRouter(Back);

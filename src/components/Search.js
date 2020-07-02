import React from "react";

const Search = (props) => {
  return (
    <div style={{ paddingTop: 30, paddingBottom: 30 }}>
      <div className="row">
        <section className="test col s4 offset-s4">
          <form onSubmit={props.handleSubmit}>
            <div className="input-field">
              <input
                placeholder="Search movie"
                onChange={props.handleChange}
                id="Search"
                type="text"
                value={props.searchTerm}
                className="validate"
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Search;

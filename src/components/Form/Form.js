import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchQuery, saveQuery } from "../../utils/actions";

// The save and Search functions
const mapDispatchToProps = dispatch => {
  return {
    save: term => dispatch(saveQuery(term)),
    search: searchTerm => dispatch(fetchQuery(searchTerm))
  };
};

// Wanted to try my hand at writing a hook and it was was easier than I thought
// this form needs dispatch to save and search queries so i connected it to redux.
const ConnectedForm = props => {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="row">
      <form
        className="col s12 grey lighten-5"
        style={{ border: "1px solid #212121", padding: ".25rem" }}
      >
        <div className="row">
          <div className="input-field col s6">
            <input
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              placeholder={"Enter Search"}
              type="text"
              name="user-input"
            />
          </div>
          <div className="input-field col s6">
            <button
              className="waves-effect waves-light btn"
              type="submit"
              onClick={e => {
                e.preventDefault();
                if (userInput !== "") {
                  props.save(userInput);
                  props.search(userInput);
                  setUserInput("");
                }
              }}
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;

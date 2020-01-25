import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchQuery, saveQuery } from "../utils/actions";

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
    <form>
      <input
        value={userInput}
        onChange={e => setUserInput(e.target.value)}
        placeholder={"Search HN"}
        type="text"
        name="user-input"
      />
      <button
        className="waves-effect waves-light btn"
        type="submit"
        onClick={e => {
          e.preventDefault();
          if (userInput !== "") {
            props.save(userInput);
            props.search(userInput);
          }
        }}
      >
        Search
      </button>
    </form>
  );
};

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;

import React from "react";

export default class SearchBar extends React.Component {
  state = {
    entered: ""
  };
  handleEntered = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  passEntered = e => {
		e.preventDefault();
    if (e.target.name === "random") {
      this.props.handleSearch("random");
    } else {
      this.props.handleSearch(this.state.entered);
    }
  };

  render() {
    return (
      <div className="searchbarSection">
        <input	className="searchbar" name="entered" onChange={this.handleEntered} placeholder="Enter what to search for"></input>
				<div className="searchButtons">
          <button className="submitButton btn" name="nonrandom" onClick={this.passEntered}>
            Submit
          </button>
					<button className="randomButton btn" name="random" onClick={this.passEntered}>
            Random Photos!
          </button>
        </div>
      </div>
    );
  }
}

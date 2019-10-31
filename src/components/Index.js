import React from "react"
import IndividualPic from "./IndividualPic"
import TitleArea from "./TitleArea.js"

export default class Index extends React.Component
{
	state = {
	    searchFor: "",
			allPics: []
	}
	handleSearch = (value) => {				//Sets state, then calls submit search (this fn is passed to children)
	  this.setState({
	    allPics: [],                            //This step is necessary to stop the animation from stuttering from existing pics to new pics
	    searchFor: value
	  }, () => {
	    this.submitSearch();
	  });
  }
	//fetches to Rails backend for content 
  submitSearch = () => {																					
  	if (this.state.searchFor === "random")
  	{
  	  fetch(`https://wonderpic-backend.herokuapp.com/random`)
  	  .then(resp => resp.json())
  	  .then(data => {
  	    this.setState({
  	        allPics: data
  	    })
  	  })
  	}
  	else {
  		fetch(`https://wonderpic-backend.herokuapp.com/search`,
  		{
  		  method: "POST",
  		  headers: {
  		    "Content-Type": "application/json"
  		  },
  		  body: JSON.stringify({
  		  	"Search": `${this.state.searchFor}`
  		  })
  		})
  		.then(resp => resp.json())
  		.then((data) => {
  		  this.setState({
  		    allPics: data.results
  		  })
  		})
  	}
	}
	
  mapPics = () => {																					//Produces all the individual pics
    let mapped = this.state.allPics.map((pic) => {
      return <IndividualPic key = {this.restartAnimation()} search = {this.handleSearch} pic = {pic}/>
    })
    return mapped;
	}

	restartAnimation = () => {																//Necessary to make sure animations happen every time search happens, rather than only first time
		let random = Math.floor(Math.random()*800);
		return random;
	}
	
  render()
  {
    return (
    	<div >
      	<TitleArea handleSearch = {this.handleSearch}/>
				<h1 key = {Math.floor(Math.random()*300)} className = "searchFor" >{this.state.searchFor ? this.state.searchFor : ""}</h1>
        <div className = "mainDiv">
          {this.mapPics()}
        </div>
			</div>
    )
  }
}

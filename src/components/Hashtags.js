import React from "react"

export default class Hashtags extends React.Component {

	handleHashtagSearch = (e) => {
		let val = e.target.innerText.slice(1);
		this.props.search(val);
	}
	mapTags = () => {
		if (this.props.tags) 
		{
			let all = this.props.tags.map(each => {
				return <p onClick = {this.handleHashtagSearch} className = "singleHashtag">#{each.title}</p>
			})
			return all;
		}
		else {
			return <p className = "singleHashtag"></p>
		}
	}
	render() 
	{
		return (
			<div className = "hashtagSection">
				{this.mapTags()}
			</div>
		)
	}
}
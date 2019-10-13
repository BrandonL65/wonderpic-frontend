import React from "react"

export default function UsernameImage(props) 
{
	return (
		<div className = "UsernameAndImage">
			<img className = "profileImage " src = {props.img} alt = ""></img>
			<p className = "username ">{props.username}</p>
			<p className = "likes"><i className="fas fa-thumbs-up thumbsUp"></i><span className = "likesSpan">{props.likes}</span></p>
		</div>
	)
}
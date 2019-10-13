import React from "react"
import UsernameImage from "./UsernameImage"
export default function LikesAndDownloads(props) 
{
  return(
    <div className = "likesAndDownloads">
			<UsernameImage img = {props.profile.small} username = {props.username} likes = {props.likes}/>

    </div>
  )
}
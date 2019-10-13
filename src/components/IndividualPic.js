import React from "react";
import DescriptionDiv from "./DescriptionDiv.js";
import Footer from "./Footer.js";
import LikesAndDownloads from "./LikesAndDownloads.js";
import Hashtags from "./Hashtags.js"
import Credits from "./Credits.js"
let whatClass = "picContainer"

export default class RenderPic extends React.Component {


	restartAnimation = () => {
		let random = Math.floor(Math.random()*400);
		return random;
	}

  render() {
    // console.log(this.props);
    return (
      <div className={`${whatClass}`}>
        <DescriptionDiv
          position="upper"
          text={this.props.pic.alt_description}
        />
        <img
          className="myImg"
          src={this.props.pic.urls.small}
          alt="unsplashArt"
        ></img>
				<Credits fullName = {this.props.pic.user.name}/>
				<Hashtags search = {this.props.search} tags = {this.props.pic.tags}/>
				<LikesAndDownloads 
					username = {this.props.pic.user.username}
					profile = {this.props.pic.user.profile_image} 
					likes = {this.props.pic.likes} 
					downloads = {this.props.pic.downloads}
				/>
        <Footer
          linkTo={this.props.pic.links.html}
          dl={this.props.pic.links.download}
        />
      </div>
    );
  }
}

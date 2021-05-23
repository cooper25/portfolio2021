import * as React from "react"
import Helmet from "react-helmet"
import "../components/main.css"
import gallery from "../components/gallery.json"
import cooper from "../images/cooper.png"
//import icons (i know theres a better way but it works)
import directory from "../images/icons/directory.png"
import discord from "../images/icons/discord.png"
import github from "../images/icons/github.png"
import twitter from "../images/icons/twitter.png"
import behance from "../images/icons/behance.png"
import favicon from "../images/icons/favicon.png"

// Choose Random Project
var objects = gallery.length + 1
var data = gallery[Math.floor(Math.random() * objects)]


const IndexPage = () => {
  return (
    <body>
      <Helmet>
        <title>coopertsoris</title>
        <meta name="author" content="Cooper Tsoris"/>
        <meta name="theme-color" content="#000000"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="shortcut icon" href={favicon}/>
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "1a7b87ab2d484241818047ef8bf2771d"}'></script>
      </Helmet>
      <div className="elements">
        <img id="wordmark" draggable="false" alt="cooper" height="30" src={cooper}></img>
        <div className="center-text">
          <p>Self-taught Graphic & Web Designer for hire; based out of the United States with over two years of experience.</p>
        </div>
        <div className="bottom-socials">
          <div className="social-buttons">
            <a draggable="false" target="_blank" rel="noopener noreferrer" href="https://directory.cppr.dev/"><img draggable="false" src={directory} alt="directory"></img></a>
            <a draggable="false" target="_blank" rel="noopener noreferrer" href="https://discord.com/users/307273393600724994/"><img draggable="false" src={discord} alt="discord"></img></a>
            <a draggable="false" target="_blank" rel="noopener noreferrer" href="https://github.com/cooper25"><img draggable="false" src={github} alt="github"></img></a>
            <a draggable="false" target="_blank" rel="noopener noreferrer" href="https://twitter.com/loertis_"><img draggable="false" src={twitter} alt="twitter"></img></a>
            <a draggable="false" target="_blank" rel="noopener noreferrer" href="https://behance.net/coopertsoris"><img draggable="false" src={behance} alt="behance"></img></a>
          </div>
        </div>
      </div>
      <div className="right_image-container">
        <div className="right_image" style={{backgroundImage: `url("${data.projectImage}")`}}></div>
        <footer>View <a target="_blank" rel="noopener noreferrer" href={data.projectLink}>{data.projectName}</a> on <b>Behance</b></footer>
      </div>
    </body>
  )
}

export default IndexPage

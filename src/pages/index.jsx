import * as React from "react"
import Helmet from "react-helmet"
import "../components/main.css"
import gallery from "../components/gallery.json"
import cooper from "../images/cooper.png"
import metaThumbnail from "../images/icons/meta-thumbnail.png"
import directory from "../images/icons/directory.png"
import discord from "../images/icons/discord.png"
import github from "../images/icons/github.png"
import twitter from "../images/icons/twitter.png"
import behance from "../images/icons/behance.png"
import favicon from "../images/icons/favicon.png"

// Banner Display
var objects = gallery.length + 1
var data = gallery[Math.floor(Math.random() * objects)]

const IndexPage = () => {
  return (
    <body>
      <Helmet>
        <title>coopertsoris</title>
        <meta name="title" content="coopertsoris"/>
        <meta name="description" content="Self-taught Graphic & Web Designer based out of the United States with over two years of experience."/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://cppr.dev/"/>
        <meta property="og:title" content="coopertsoris"/>
        <meta property="og:description" content="Self-taught Graphic & Web Designer based out of the United States with over two years of experience."/>
        <meta property="og:image" content={metaThumbnail}/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://cppr.dev/"/>
        <meta property="twitter:title" content="coopertsoris"/>
        <meta property="twitter:description" content="Self-taught Graphic & Web Designer based out of the United States with over two years of experience."/>
        <meta property="twitter:image" content={metaThumbnail}/>
        <meta name="theme-color" content="#000000"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="shortcut icon" href={favicon}/>
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "1a7b87ab2d484241818047ef8bf2771d"}'></script>
        <script src='https://http://cooper25.github.io/hotjar.js'></script>
      </Helmet>
      <div className="screen-on-load">
        <img draggable="false" alt="cooper tsoris" src={cooper} height="35"/>
        <div className="block top"></div>
        <div style={{position: "absolute", right: "0px"}} className="block bottom"></div>
      </div>
      <div className="page-contents">
        <div className="elements">
          <img id="wordmark" draggable="false" alt="cooper" height="30" src={cooper}></img>
          <div className="center-text">
            <a href="https://directory.cppr.dev/" draggable="false" target="_blank" rel="noopener noreferrer"><div className="hireable-tag">FOR HIRE</div></a><br/>
            <p>Self-taught Graphic & Web Designer based out of the United States with over two years of experience.</p>
          </div>
          <div className="bottom-socials">
            <div className="social-buttons">
              <a title="Link Directory" draggable="false" target="_blank" rel="noopener noreferrer" href="https://directory.cppr.dev/"><img draggable="false" src={directory} alt="directory"></img></a>
              <a title="Discord" draggable="false" target="_blank" rel="noopener noreferrer" href="https://discord.com/users/307273393600724994/"><img draggable="false" src={discord} alt="discord"></img></a>
              <a title="Twitter" draggable="false" target="_blank" rel="noopener noreferrer" href="https://twitter.com/loertis_"><img draggable="false" src={twitter} alt="twitter"></img></a>
              <a title="GitHub" draggable="false" target="_blank" rel="noopener noreferrer" href="https://github.com/cooper25"><img draggable="false" src={github} alt="github"></img></a>
              <a title="Behance" draggable="false" target="_blank" rel="noopener noreferrer" href="https://behance.net/coopertsoris"><img draggable="false" src={behance} alt="behance"></img></a>
            </div>
          </div>
        </div>
        <div className="right_image-container">
          <div className="right_image" style={{backgroundImage: `url(${data.projectImage})`}}></div>
          <a target="_blank" rel="noopener noreferrer" href={data.projectLink}><footer>View <b>{data.projectName}</b> on <b>Behance</b></footer></a>
        </div>
      </div>
    </body>
  )
}

export default IndexPage
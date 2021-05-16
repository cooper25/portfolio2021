import * as React from "react"
import Helmet from "react-helmet"
import "../components/main.css"
import gallery from "../components/gallery.json"
import cooper from "../images/cooper.png"

// Choose Random Project
var objects = gallery.length + 1
var number = Math.floor(Math.random() * objects)
var data = gallery[number]

const IndexPage = () => {
  return (
    <body>
      <Helmet>
        <title>cooper tsoris</title>
        <meta name="author" content="Cooper Tsoris"/>
        <meta name="theme-color" content="#000000"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <div className="elements">
        <img draggable="false" alt="cooper" height="30" src={cooper}></img>
        <div className="center-text">
          <p>Self-taught Graphic & Web Designer based out of the United States with over two years of experience.</p>
        </div>
        <div className="bottom-socials">
          test
        </div>
      </div>
      <div className="right_image-container">
        <div className="right_image" style={{backgroundImage: `url(${data.projectImage})`}}></div>
        <footer>View <a target="_blank" rel="noopener noreferrer" href={data.projectLink}>{data.projectName}</a> on <b>Behance</b></footer>
      </div>
    </body>
  )
}

export default IndexPage

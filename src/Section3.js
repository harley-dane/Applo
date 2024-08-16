import React  from "react"
import calc from "./Image/calc.png"
import buger from "./Image/buger.png"
import arrow from "./Image/arrow.png"
import tic from "./Image/tic.png"



export default function Section3() {
function MyGit(){
alert('Github')
}
return (
<section className="projects">
<p className="section__text__p1">Browse My Recent</p>
<h1 className="title">Projects</h1>
<div className="experience-details-container">
<div className="about-containers">
<div className="details-container color-container">
<div className="article-container">

<img
src={calc}
alt="Project 1"
className="project-img"

/>
</div>
<h2 className="experience-sub-title project-title">Project One</h2>
<div className="btn-container">
<button
className="btn btn-color-2 project-btn"
>
<p><a href="https://github.com/harley-dane/caloc" target="_blank">Github</a></p>
</button>
<button
className="btn btn-color-2 project-btn"
>
<p><a href="https://calculatinei.netlify.app/" target="_blank">Live Demo</a></p>
</button>
</div>
</div>
<div className="details-container color-container">
<div className="article-container">
<img
src={buger}
alt="Project 2"
className="project-img"
/>
</div>
<h2 className="experience-sub-title project-title">Project Two</h2>
<div className="btn-container">
<button
className="btn btn-color-2 project-btn"


>
<p><a href="https://github.com/harley-dane/Harley-Buger" target="_blank">Github</a></p>
</button>
<button
className="btn btn-color-2 project-btn"

>
<p><a href="https://harley-burger.netlify.app/" target="_blank">Live Demo</a></p>
</button>
</div>
</div>
<div className="details-container color-container">
<div className="article-container">
<img
src={tic}
alt="Project 3"
className="project-img"
/>
</div>
<h2 className="experience-sub-title project-title">Project Three</h2>
<div class="btn-container">
<button
className="btn btn-color-2 project-btn"

>
<p><a href="https://github.com/harley-dane/Nuvo-tictoc" target="_blank">Github</a></p>
</button>
<button
className="btn btn-color-2 project-btn"

>
<p><a href="https://mijn-tic-tic-to.netlify.app/" target="_blank">Live Demo</a></p>
</button>
</div>
</div>
</div>
</div>
<img
src={arrow}
alt="Arrow icon"
className="icon arrow"
onClick={MyGit}
/>
</section>
)
}
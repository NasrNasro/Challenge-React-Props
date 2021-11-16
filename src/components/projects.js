import PropTypes from "prop-types"
import Project from "./Projs"

function Proj({arr}) {
    return(
    <div>
      <section id="projects">
        <h2 className="text-important">Projects</h2>
        <div className="projects-container">
          {arr.map ((el,i) =>
          <Project el={el} key={i}></Project>
          )}
        </div>
      </section>
    </div>
    )
}

Proj.propTypes = {
  arr : PropTypes.array
}

export default Proj
import PropTypes from "prop-types"
import Project from "./Projs"

function Proj({arr}) {
    return(
    <div>
      <section id="projects">
        <h2 class="text-important">Projects</h2>
        <div class="projects-container">
          {arr.map (el =>
          <Project el={el}></Project>
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
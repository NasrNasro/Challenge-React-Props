import PropTypes from "prop-types"

function Project ({el}) {
    return(
        <div className="project-card">
            <img src= {el.img} alt="project" />
            <h3>{el.title}</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
                aliquam.
            </p>
            <p><a href="#">Github Link</a></p>
        </div>
    )
}

Project.propTypes = {
    el : PropTypes.object 
  }

export default Project
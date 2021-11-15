import PropTypes from "prop-types"

function About({fullName, children}) {

    return(
        <section id="about-me">
            <h1>
            Hello, my name is
            <span class="rotate text-important"> {fullName}</span>,<br />
            and i make horrible websites.
            </h1>
            {children}
        </section>
    )
}

About.defaultProps = {
    fullName: 'FirstName LastName'
}

About.propTypes = {
    fullName : PropTypes.string,
    children : PropTypes.any
}

export default About
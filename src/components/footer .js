import PropTypes from "prop-types"

function Foot({year}) {
    return(
        <footer>
            <p>Copyritghts &copy; GOMYCODE {year}</p>
        </footer>
    )
}

Foot.defaultProps = {
    year: '2020'
}

Foot.propTypes = {
    year : PropTypes.string
}

export default Foot
import PropTypes from "prop-types"

function Head ({fullName}) {
    return (
        <header>
            <h1>{fullName}</h1>
            <ul class="navmenu">
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </header>
    )
}

Head.defaultProps = {
    fullName: 'FirstName LastName'
}

Head.propTypes = {
    fullName : PropTypes.string
}

export default Head
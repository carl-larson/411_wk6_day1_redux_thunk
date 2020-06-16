// fill out this container
import { connect } from 'react-redux'
import Import from '../components/Import'
import { fetchMakes } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        makes: state.makes
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("Dispatched")
    return {
        fetchMakes: () => dispatch(fetchMakes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Import)

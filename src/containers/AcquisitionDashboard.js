import { connect } from 'react-redux'
import AcquisitionDashboard from '../components/AcquisitionDashboard'
import { fetchAcquisition } from '../actions'

export default connect(state => state, { fetchAcquisition })(AcquisitionDashboard)
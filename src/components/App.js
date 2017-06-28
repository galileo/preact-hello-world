import { h, Component } from 'preact'
import { withRouter } from 'react-router-dom'
import { connect } from 'preact-redux'
import { bindActionCreators } from 'redux'
import User from './User'
import { fetchUser } from '../actions/userActions'

class App extends Component {
  componentDidMount () {
    const username = this.props.match.params.username

    this.props.fetchUser(username)
  }

  render ({ loading, user, fetchUser }) {
    return loading
      ? <p>Loading, please wait ... Fetching</p>
      : <div class='app'>
        <User {...user} />
      </div>
  }
}

const mapStateToProps = ({loading, user}) => {
  return {
    loading,
    user
  }
}

const mapDispatchToProps = (dispatch) => {
  return { fetchUser: (username) => dispatch(fetchUser(username)) }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

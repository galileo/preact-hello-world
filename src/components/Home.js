import { h } from 'preact'
import { withRouter } from 'react-router-dom'

function search (history, query) {
  history.push(`/profile/${encodeURIComponent(query)}`)
}

const Home = ({history}) => <section>
  <p>Enter a GitHub Username</p>
  <input
    type='search'
    onSearch={e => search(history, e.target.value)}
  />
</section>

export default withRouter(Home)

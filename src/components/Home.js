import { h } from 'preact'
import { route } from 'preact-router'

function search (query) {
  route(`/profile/${encodeURIComponent(query)}`)
}

const Home = () => <section>
  <p>Enter a GitHub Username</p>
  <input
    type='search'
    onSearch={e => search(e.target.value)}
  />
</section>

export default Home

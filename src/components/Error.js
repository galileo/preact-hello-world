import { h } from 'preact'
import { Link } from 'react-router-dom'

const Error = () => {
  return <div>
    <h1>Ups... something went wrong</h1>
    <Link to='/'>Home</Link>
  </div>
}

export default Error

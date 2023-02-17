// Write your JS code here
import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav>
    <Link to="/">
      <h1>Home</h1>
    </Link>
    <Link to="/about">
      <h1>About</h1>
    </Link>
  </nav>
)

export default withRouter(Header)

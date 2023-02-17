// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Component} from 'react'
import './index.css'

class Login extends Component {
  onSubmitSuccess = JWTtoken => {
    const {history} = this.props

    Cookies.set('jwt_token', JWTtoken, {
      expires: 30,
    })
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON,
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/login" />
    }
    return (
      <form onSubmit={this.submitForm}>
        <h1>Please Login</h1>
        <button type="submit">Login with Sample</button>
      </form>
    )
  }
}
export default Login

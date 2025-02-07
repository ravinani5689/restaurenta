/* eslint-disable import/no-extraneous-dependencies */
import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_token')

  if (token===undefined) {
    return <Redirect to="/login" />
  }

  return <Route {...props} />
}

export default ProtectedRoute

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import useApi from '../../hooks/useApi'
import { SET_TOKEN } from '../../redux/reducers/authReducer'

const Header = (props) => {
  console.log('headerprops>>>>>', props)
  const api = useApi()

  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      api
        .get('user/appData')
        .then((response) => {
          console.log('>>>>appData resp', response)
          setUser(response.data.data.user)
        })
        .catch((err) => {
          console.log('err header', err)
        })
    }
  }, [])

  const onLogoutBtnClick = () => {
    api
      .get('auth/logout')
      .then((response) => {
        console.log('>>>logout res', response)
      })
      .catch((err) => {
        console.log('err header', err)
      })
      .finally(
        localStorage.removeItem('token'),
        (window.location.href = '/#'),
        setTimeout(() => {
          window.location.reload()
        }, 111),
      )
  }

  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <a
        href="/"
        className="d-flex align-items-center text-dark text-decoration-none"
      >
        <span className="fs-4">APİ Tutorial</span>
      </a>
      TOKEN: {props.authState.token}
      {user ? (
        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <strong className="me-3 py-2">{user.fullname}</strong>
          <button
            onClick={onLogoutBtnClick}
            className="me-3 py-2 btn btn-primary"
            href="#/logout"
          >
            Logout
          </button>
        </nav>
      ) : (
        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <a className="me-3 py-2 btn btn-primary" href="#/login">
            Login
          </a>
          <a className="me-3 py-2 btn btn-primary" href="#/logout">
            Register
          </a>
        </nav>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { ...state }
}

export default connect(mapStateToProps)(Header)

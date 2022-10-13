import React from 'react'
import './App.css'
import Footer from './components/footer'
import Home from './pages/home'
import Header from './components/header'
import Login from './pages/login'
import Register from './pages/logout'
import useApi from './hooks/useApi'
import { connect } from 'react-redux'

import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import CategoryDetail from './pages/category_detail'
import { REMOVE_APP_DATA, SET_APP_DATA } from './redux/reducers/appDataReducer'
import { REMOVE_TOKEN } from './redux/reducers/authReducer'

function App(props) {
  const api = useApi()
  console.log('appdataprops>>>>', props)

  if (props.authState.token && !props.appDataState.appData) {
    //appdata bilgisini alıyoryz
    api
      .get('user/appData')
      .then((response) => {
        console.log('>>>>APPDATA resp', response)

        const action = {
          type: SET_APP_DATA,
          payload: { appData: response.data.data },
        }
        props.dispatch(action)
      })
      .catch((err) => {
        console.error('>>>appdataerrr', err)
        if (err.response.data.status === 'error') {
          if (err.response.data.exceptionType === 'UserNotLoggedInException') {
            localStorage.removeItem('token')

            const action = {
              type: REMOVE_TOKEN,
            }
            props.dispatch(action)

            const actionAppData = {
              type: REMOVE_APP_DATA,
            }
            props.dispatch(actionAppData)
            window.location.href('/#')
          }
        } else {
          alert(
            'Sistemde genel bir hata oluştu, lütfen daha sonra tekrar deneyin',
          )
        }
      })
  }
  return (
    <div className="container py-3">
      <Header />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Register />} />
          <Route path="category/:slug" element={<CategoryDetail />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  )
}

const mapProps = (state) => {
  return { ...state }
}

export default connect(mapProps)(App)

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import useApi from '../../hooks/useApi'
import Category from './component/category'
import { connect } from 'react-redux'
import { setToken } from '../../redux/reducers/authReducer'

const Home = ({ authState }) => {
  const [categories, setCategories] = useState([])
  const api = useApi()
  const dispatch = useDispatch()

  useEffect(() => {
    api
      .get('public/categories/listMainCategories')
      .then((response) => {
        console.log('>>>REScategory', response)
        setCategories(response.data.data)
      })
      .catch((err) => {
        console.log('>>>categoryerrr', err)
      })
  }, [])

  const onChange = (e) => {
    setToken(dispatch, e.target.value)
    // dispatch({
    //   type: 'set_token',
    //   payload: {
    //     token: e.target.value,}

    // })
  }

  return (
    <main>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {categories.map((category) => {
          return <Category categoryProp={category} />
        })}
      </div>
      <h2 className="display-6 text-center mb-4">Compare plans</h2>
    </main>
  )
}

const mapToProps = (state) => {
  return { ...state }
}

export default connect(mapToProps)(Home)

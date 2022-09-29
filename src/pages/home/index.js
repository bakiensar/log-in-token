import React, { useEffect, useState } from 'react'
import useApi from '../../hooks/useApi'
import Category from './component/category'

const Home = () => {
  const [categories, setCategories] = useState([])
  const api = useApi()

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

  return (
    <main>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {categories.map((category) => {
          return <Category category={category} />
        })}
      </div>

      <h2 className="display-6 text-center mb-4">Compare plans</h2>
    </main>
  )
}

export default Home

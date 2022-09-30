import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useApi from '../../hooks/useApi'
import ServiceBox from './components/service_box'

const CategoryDetail = () => {
  const params = useParams()
  console.log('>>>params', params)

  const api = useApi()

  const [loading, setLoading] = useState(true)
  const [categoryDetails, setCategoryDetails] = useState(null)

  useEffect(() => {
    api
      .get(`public/categories/getBySlug/${params.slug}`)
      .then((response) => {
        console.log('>>>categorydetailres', response)
        setCategoryDetails(response.data.data)
        setLoading(false)
      })
      .catch((err) => console.log('>>>categorydetail err', err))
  }, [])
  return (
    <div>
      {loading ? (
        <img src="loading.gif" />
      ) : (
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {categoryDetails.services.map((service) => {
            return <ServiceBox serviceProp={service} />
          })}
        </div>
      )}
    </div>
  )
}

export default CategoryDetail

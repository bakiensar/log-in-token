import React, { useState } from 'react'

const CategoryDetail = () => {
  const [categoryDetails, setCategoryDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  return (
    <div>
      {loading ? (
        <img src="loading.gif"></img>
      ) : (
        <strong>Category Details Loaded</strong>
      )}
    </div>
  )
}

export default CategoryDetail

import React from 'react'

const Category = ({ category }) => {
  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">{category.name}</h4>
        </div>
        <div className="card-body">
          <img src={category.image} style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  )
}

export default Category

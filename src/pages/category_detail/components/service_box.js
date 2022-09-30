import React from 'react'
import CategoryDetail from '..'

const ServiceBox = ({ serviceProp }) => {
  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">
            <a href={'#/service/' + serviceProp.slug}>{serviceProp.name}</a>
          </h4>
        </div>
        <div className="card-body">
          <img src={serviceProp.image} style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  )
}

export default ServiceBox

import React from 'react'
import {Link} from 'react-router-dom';

const Country = ({country}) => {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col">
          <h3 className="text-dark">
            <Link to={`/country/${country.country}`}>{country.country}</Link>
          </h3>
          <img src={country.flag} alt="Flag" style={{width: 200}}/>
        </div>
        <div className="col text-dark">
          <div className="d-flex flex-row">
            <div className="p-1 font-weight-bold">
              <p>Total Cases:</p>
            </div>
          
            <div className="p-1">
              <p>{country.total_cases}</p>
            </div>
          </div>
          <div className="d-flex flex-row">
            <div className="p-1 font-weight-bold">
                <p>New Cases:</p>
              </div>
              <div className="p-1">
                <p>{country.new_cases}</p>
              </div>
          </div>
          <div className="d-flex flex-row">
            <div className="p-1 font-weight-bold">
                <p>Total Recovered:</p>
              </div>
              <div className="p-1">
                <p>{country.total_recovered}</p>
              </div>
          </div>
          <div className="d-flex flex-row">
            <div className="p-1 font-weight-bold">
                <p className="text-success">Active Cases:</p>
              </div>
              <div className="p-1">
                <p>{country.active_cases}</p>
              </div>
          </div>
          <div className="d-flex flex-row">
          <div className="p-1 font-weight-bold">
              <p className="text-danger">Total Deaths:</p>
            </div>
            <div className="p-1">
              <p>{country.total_deaths}</p>
            </div>
          </div>


          
        </div>
      </div>
    </div>
  )
}

export default Country;
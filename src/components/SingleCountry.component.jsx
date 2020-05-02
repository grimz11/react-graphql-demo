import React from 'react'
import {gql} from 'apollo-boost';
import {Query} from 'react-apollo';

const COVID_SINGLE_COUNRTY = gql`
  query getCountry($country: String!) {
    getCountry(country: $country) {
      country
      id
      total_cases
      new_cases
      total_deaths
      new_deaths
      total_recovered
      active_cases
      flag
      serious_critical
    }
  }
`;

const SingleCountry = ({match}) =>{
  console.log(match);
  return (
    <div className="card card-body mb-3">
      <Query query={COVID_SINGLE_COUNRTY} variables={{country : match.params.country}}>
        {({ loading, error, data }) => {
              console.log(data)
              if (loading) return <h1>Loading....</h1>;
              if (error) return console.log(error);

              return (
                <div className="row">
                  <div className="col">
                    <h3 className="text-dark">{data.getCountry.country}</h3>
                    <img src={data.getCountry.flag} alt="Flag" style={{width: 200}}/>
                  </div>
                  <div className="col text-dark">
                    <div className="d-flex flex-row">
                      <div className="p-1 font-weight-bold">
                        <p>Critical Cases:</p>
                      </div>
                      <div className="p-1 ">
                        <p>{data.getCountry.serious_critical}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
          }}
      </Query>
    </div>
  )
}

export default SingleCountry;
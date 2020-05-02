import React, { PureComponent, Fragment } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import Country from "./Country.component";

const COVID_STATS_QUERY = gql`
  query {
    getCountries {
      country
      id
      total_cases
      new_cases
      total_deaths
      new_deaths
      total_recovered
      active_cases
      flag
    }
  }
`;

class Home extends PureComponent {
  render() {
    return (
      <div className="container mt-5">
        <Query query={COVID_STATS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h1>Loading....</h1>;
            if (error) return console.log(error);

            return <Fragment>
                {
                  data.getCountries.map(country => 
                    <Country key={country.id} country={country} />
                  )
                }
              </Fragment>;
          }}
        </Query>
      </div>
    );
  }
}

export default Home;

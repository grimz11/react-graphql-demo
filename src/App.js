import React, { PureComponent } from "react";
import "./App.css";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home.components";
import SingleCountry from "./components/SingleCountry.component";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <div className="mt-5" stlye={{ witdh: 300, margin: "auto" }}>
            <img
              src="https://lmg-labmanager.s3.amazonaws.com/assets/articleNo/22021/aImg/40702/novel-coronavirus-illustration-m.png"
              alt=""
              style={{witdh: 300, margin: "auto" , display: "block"}}
            />
          </div>
          <h3 className="mt-2" style={{textAlign: "center"}}>Covid-19 Tracker</h3>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/country/:country" component={SingleCountry} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;

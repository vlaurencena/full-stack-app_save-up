import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from "react";

// Page & Layout imports
import AuthenticatedHeader from "./components/AuthenticatedHeader";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Resources from "./pages/Resources";
import SingleResource from "./pages/SingleResource";
import PageNotFound from "./pages/PageNotFound";
import Category from "./pages/Category";
import Footer from "./components/Footer";
import NotAuthenticatedHeader from "./components/NotAuthenticatedHeader";
import Balance from "./pages/Balance";

// Apollo Client
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";


const App = () => {

  const [authenticated, setAuthenticated] = useState(false);
  const [userToken, setUserToken] = useState(undefined);

  // Authentication
  useEffect(() => {
    const USER_TOKEN = localStorage.getItem("save_up_token");
    USER_TOKEN && setUserToken(USER_TOKEN);
  }, []);

  useEffect(() => {
    //  console.log(userToken);
    userToken !== undefined && setAuthenticated(true);
  }, [userToken]);

  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
    headers: authenticated ? { Authorization: `Bearer ${userToken}` } : null
  });

  // NOT AUTHENTICATED
  if (!authenticated) {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="app">
            <NotAuthenticatedHeader />
            <Switch>
              <Route path="/login">
                <Login
                  setUserToken={setUserToken}
                />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/">
                <Home />
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router >
      </ApolloProvider>
    )
  } else {
    //AUTHENTICATED
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="app">
            <AuthenticatedHeader setAuthenticated={setAuthenticated} />
            <Switch>
              <Route path="/dashboard">
                <Dashboard token={userToken}/>
              </Route>
              <Route path="/resources" exact>
                <Resources token={userToken} />
              </Route>
              <Route path="/resources/category/:id">
                <Category />
              </Route>
              <Route path="/resources/:id">
                <SingleResource />
              </Route>
              <Route path="/balance">
                <Balance token={userToken} />
              </Route>
              <Route path="/">
                <Redirect to="/dashboard" />
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router >
      </ApolloProvider>
    );
  }

}

export default App;
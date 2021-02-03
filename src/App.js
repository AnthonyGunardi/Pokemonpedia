import React from 'react'
import { Header, Sidebar, Footer } from './components'
import { Container, PokeDetail, TeamDetail, NotFound } from './pages'
import { Switch, Route } from "react-router-dom";

function App () {
  return (
    <>
    <Header />
    <div className="flex container mx-auto flex-wrap sm:flex-nowrap sm:mt-3">
      <Switch>
        <Route path="/team">
          <TeamDetail />
        </Route>
        <Route path="/pokemon/:id">
          <PokeDetail />
        </Route>
        <Route exact path="/">
          <Container />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Sidebar />
    </div>
    <Footer />
    </>
  )
}

export default App;

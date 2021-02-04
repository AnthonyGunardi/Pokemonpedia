import React from 'react'
import { Header, Sidebar, Footer } from './components'
import { Container, PokeDetail, TeamDetail, NotFound } from './pages'
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <ToastContainer 
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
    />
    <Footer />
    </>
  )
}

export default App;

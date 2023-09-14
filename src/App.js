import React from 'react';
import './assets/css/style.css';
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import SearchForm from "./components/SearchForm/SearchForm";
import FlightList from "./components/FlightList/FlightList";

const App = () => {
    return (
      <>
          <Header />
          <SearchForm />
          <FlightList />
          <Footer />
      </>
    );
}

export default App;

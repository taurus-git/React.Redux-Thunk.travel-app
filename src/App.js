import React from 'react';
import './assets/css/style.css';
import Header from "./components/Header/Header";
import BackgroundWrapper from "./components/BackgroundWrapper/BackgroundWrapper";
import Footer from "./components/Footer/Footer";
import SearchForm from "./components/SearchForm/SearchForm";
import FlightList from "./components/FlightList/FlightList";

const App = () => {
    return (
      <>
          <BackgroundWrapper>
              <Header />
              <SearchForm />
          </BackgroundWrapper>
          <FlightList />
          <Footer />
      </>
    );
}

export default App;

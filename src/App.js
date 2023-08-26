import React from 'react';
import './assets/css/style.css';
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import SearchForm from "./components/SearchForm/SearchForm";

const App = () => {
    return (
      <>
          <Header />
          <SearchForm />
          <Footer />
      </>
    );
}

export default App;

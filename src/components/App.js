import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";



const App = class extends React.Component {
  render() {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
  }
};

export default App;

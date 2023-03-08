import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

//This code is used to be a starting point for buildin a React application. 
//Other components and fuctionality can be added to this base component to create complex applications.

function App() { 
  return (
    <div className="App">
      
      <Navbar />
      <div className="content"></div>
        <Home />
        <Footer />      
    </div>
  );
}

export default App;

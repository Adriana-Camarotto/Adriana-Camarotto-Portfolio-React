import './App.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

//This code is used to be a starting point for buildin a React application. 
//Other components and fuctionality can be added to this base component to create complex applications.

function App() { 
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to my portfolio!</h1>
      <div className="content"></div>
        <Home />
        <Header />
        <Footer />      
    </div>
  );
}

export default App;

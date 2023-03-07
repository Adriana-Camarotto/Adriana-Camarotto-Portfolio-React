import Navbar from "./components/Navbar";
import Home from "./components/Home";


//This code is used to be a starting point for buildin a React application. 
//Other components and fuctionality can be added to this base component to create complex applications.

function App() { 
  const title = 'Welcome to my portfolio!';

   return (
    <div className="App">
      <Navbar />
      <div className="content"></div>
        <Home />
    </div>
  );
}

export default App;

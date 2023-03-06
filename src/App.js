import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  const obj = {name:"Adriana"};

  const hello = ()=>{
    return <h2>hello</h2>
  }

  const array = ['Pizza', 'Tacos', 'Salad']
  return (
    <div className="App">
      <Header myName={obj} hello={hello} array={array} />
    </div>
  );
}

export default App;
.
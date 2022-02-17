import ItemsListContainer from "./components/ItemsListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemsListContainer
        greeting="Hola Coder"
      />
    </div>
  );
}

export default App;

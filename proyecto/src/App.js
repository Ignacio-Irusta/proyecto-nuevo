import ItemsListContainer from "./components/ItemsListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemsListContainer greeting="Productos"/>} />
          <Route path="/category/:categoryid" element={<ItemsListContainer greeting="Categoria de productos"/>} />
          <Route path="/item/:id" element={<ItemDetailContainer greeting="Detalle"/>} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;

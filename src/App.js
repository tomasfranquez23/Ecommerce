import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import './Components/ItemListContainer/item.css'
import './Components/Header/Header.css'
import Header from './Components/Header/Header';


function App() {
  return (
    <div className='app'>
      <Header />
      <ItemListContainer />
    </div>
  );
}

export default App;

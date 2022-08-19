import './App.css';
import Search from './components/search box/Search';

function App() {
  const HandleonSearchChange = (searchData) => {
    console.log(searchData);
  }
  
  return (
    <div className="container">
    <Search onSearchChange={HandleonSearchChange}/>
    </div>
  );
}

export default App;

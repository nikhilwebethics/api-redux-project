
import Header from './Components/Header';
import Searchbar from './Components/Searchbar';
import Posts from './Components/Posts';


function App() {

  return (
  <>
    <Header/>
    < div className="md:container md:mx-auto">
      <Searchbar/>
      <Posts/>
    </div>
  </>
  );
}

export default App;

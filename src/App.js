import './App.css';
import TextForm from './Components/TextForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';

function App() {
  return (
    <>
    <Header header="Word Counter" />
    <div className="container">
      <TextForm heading="Play With Words" />
    </div>
    </>
  );
}

export default App;

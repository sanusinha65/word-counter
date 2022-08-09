import './App.css';
import TextForm from './Components/TextForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';

function App(props) {
  return (
    <>
    <Header header="Word Counter" />
    <div>
      <TextForm heading="Play With Words" />
    </div>
    </>
  );
}

export default App;

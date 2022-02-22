import logo from './logo.svg';
import './App.css';
import Data from './components/Data';


function App() {
  const profil = {
    fullName : 'Nourhen Abdelhak',
    bio : 'web developer',
    profession : 'student',
    isPresent : true,

  }
  return (
    <div className="App">
      <Data test= {profil}>
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
      </Data>
    </div>
  );
}




export default App;

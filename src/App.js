// import logo from './logo.svg';
import './App.css';
import {Mansur,Andrezao,Nomedis} from './hello.js'

function App() {
  return (
    <div>
    <Andrezao saldo="-200" texto="Ricão"/>
    <Mansur />
    <Nomedis nome_sala="Dr.Kogas"/>
    </div> 
  );
}

export default App;

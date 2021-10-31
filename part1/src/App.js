import './App.css';
import Mensaje from './Mensaje'


function App() {
	const mensaje = "Hola ruben"
  return (
    <div className="App">
			<Mensaje color="red" message="estamos trabajando en un curso de react"/>
			<Mensaje color= "#3b3b3b" message="Segunda linea"/>
			<Mensaje color="blue" message="tercera linea"/>
    </div>
  );
}

export default App;

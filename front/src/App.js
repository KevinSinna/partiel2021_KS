import logo from './logo.svg';
import './App.css';

function App() {
  fetch("http://localhost:3000/people")
.then((response) =>{
  return response.json()
})
.then((result) =>{
  this.setState({post:result})
  console.log(result)
});
  return (
    <div className="App">
      <p>Bonjour a quoi voulez vous jouer ?</p>
      <input></input>
      <button onclick="myFunction()">Valider</button>
      <div>
        <p>VOici ce que nous vous proposons :</p>
      </div>
   </div>
   
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";

const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};


const Content = () => (
  <div className="content">
    <Card>
      <h2>Card 1</h2>
      <p>Esta es la card 1</p>
      <p>Persona asignada: Hasbulla</p>
      <p>Fecha de inicio: 11/9/2024</p>
      <p>Fecha de fin: 11/10/2024</p>
    </Card>

    <Card>
      <h2>Card 2</h2>
      <p>Esta es la segunda card.</p>
      <p>Persona asignada: Maradona</p>
      <p>Fecha de inicio: 15/09/2024</p>
      <p>Fecha de fin: 15/10/2024</p>
    </Card>

    <Card>
      <h2>Card 3</h2>
      <p>Esta es la card 3</p>
      <p>Persona asignada: Wolverine</p>
      <p>Fecha de inicio: 17/09/2024</p>
      <p>Fecha de fin: 17/10/2024</p>
    </Card>
  </div>
);
function App() {
  return (
    <div className="App">
      <Content />
    </div>
  );
}


export default App;

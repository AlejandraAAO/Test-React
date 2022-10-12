import { useSyncExternalStore } from "react";
import "./App.css";
import { Posts } from "./Posts";
import { TaskCard } from "./Task";

const users = [
  { id: 1, name: "Yogur", image: "https://robohash.org/user1" },
  { id: 2, name: "Maria", image: "https://robohash.org/user2" },
];

//2 ejercicio: captura el valor del input en una funcion fuera

function App() {
  return (
    <div className="App">
      <TaskCard ready={true} />

      <input
        id="text1"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <input
        id="text1"
        onChange={(e) => {
          console.log(e.target.id);
        }}
      />

      <p>---------------------</p>

      <p>Evita el comportamiento por defecto/evita el actulizar la pagina</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p>User form</p>
        <button>Send</button>
      </form>

      <p>---------------------</p>

      <p></p>
      <>
        {users.map((user) => {
          return <p key={user.id}>{user.name}</p>;
        })}
      </>
    </div>
  );
}

export default App;

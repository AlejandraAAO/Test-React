import { VscBug } from "react-icons/vsc";

//Fetch : consultando apis
//promesas

const getData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    //traigo la data y lo parseo a json
    .then((r) => r.json())
    //con la data en json ya puedo maipularla
    .then((data) => console.log(data))
    .catch((e) => console.error(e));
};

export const Posts = () => {
  return <button onClick={getData()}>
    <p>Pega como un compoennte</p>
    <VscBug />
    Fetch</button>;
};

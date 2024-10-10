import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  let [task, setTask] = useState("");
  let [alltudo, setalltudo] = useState([]);
  let handleInput = (e) => {
    setTask(e.target.value);
  };
  let handleClick = () => {
    if (task) {
      axios
        .post("http://localhost:4000/api/todo", {
          tudo: task,
        })
        .then((data) => {
          console.log(data);
          task("");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please enter your value");
    }
  };

  useEffect(() => {
    async function getAllTudo() {
      let data = await axios.get("http://localhost:4000/api/alltodo");
      setalltudo(data.data);
    }
    getAllTudo();
  }, [alltudo]);

  let handleDelete = (id) => {
    console.log(id);
    axios
      .delete("http://localhost:4000/api/delete", { data: { id } })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "220px" }}>
      <input onChange={handleInput} type="text" placeholder="Enter Your Task" />
      <a onClick={handleClick}>Submit</a>
      <div>
        <ul>
          {alltudo.map((item, index) => (
            <li className="li" style={{ listStyle: "none" }}>
              {index + 1} : {item.tudo}{" "}
              <a
                onClick={() => handleDelete(item._id)}
                className="delete"
                href="#"
              >
                Delete
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

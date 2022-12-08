import { useState } from "react";
import "./Input.css"

export default function Input () {

  const [newTask, setnewTask] = useState("");

  return (
    <div  className="input">
      <input
        placeholder="New task"
        type="text"
        value={newTask}
        onChange={(e) => setnewTask(e.target.value)}
       required
      />
      <div className="send">
        Enviar
      </div>
    </div>
  )
};
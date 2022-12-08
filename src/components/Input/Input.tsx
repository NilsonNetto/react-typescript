import { Dispatch, SetStateAction, useState } from "react";
import "./Input.css"

type InputProps = {
  tasks: string[],
  setTasks: Dispatch<SetStateAction<string[]>>
}

export default function Input ({tasks, setTasks}: InputProps) {

  const [newTask, setnewTask] = useState("");

function insertTask (newTask: string) {
  if(newTask){
    setTasks([...tasks, newTask]);
    setnewTask("");
  }
}

  return (
    <div  className="input">
      <input
        placeholder="New task"
        type="text"
        value={newTask}
        onChange={(e) => setnewTask(e.target.value)}
       required
      />
      <div className="send" onClick={()=>insertTask(newTask)}>
        Enviar
      </div>
    </div>
  )
};
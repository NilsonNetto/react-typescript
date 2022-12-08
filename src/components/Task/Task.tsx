import "./Task.css"

type taskProps = {
  task: string
  removeTask: (task:string)=>void
}

export default function Task ({task, removeTask}: taskProps) {
  return (
    <div className="task">
      <p>
        {task}
      </p>
      <div className="delete" onClick={()=>removeTask(task)}>
        X
      </div>
    </div>
  );
};
import Task from './Task';

const TaskList = ({tasks ,filteredTasks , setTasks
    ,numberMyDay ,numberImportant ,numberPersonal ,numberAssign ,numberComplete 
    ,datefromcalen ,isTodo }) => {
        console.log("filter:",filteredTasks)
    return (  
        <div className="task-list">
            {filteredTasks.map((task, index) => (
            <Task
            key={index}
            task={task}
            setTasks={setTasks}
            tasks={tasks}
            numberMyDay={numberMyDay}
            numberImportant={numberImportant}
            numberPersonal={numberPersonal}
            numberAssign={numberAssign}
            numberComplete={numberComplete}
            datefromcalen={datefromcalen}
            isTodo={isTodo}
          />
        ))}
        </div>
    );
}
 
export default TaskList;
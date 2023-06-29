import Task from './Task.js';

const TaskList = ({tasks ,filteredTasks , setTasks ,today
    ,numberMyDay ,numberImportant ,numberPersonal ,numberAssign ,numberComplete 
    ,setNumberMyDay ,setNumberImportant ,setNumberPersonal ,setNumberAssign ,setNumberComplete , datefromcalen }) => {
        console.log("filter:",filteredTasks)
    return (  
        <div className="task-list">
            {filteredTasks.map((task, index) => (
            <Task
            key={index}
            task={task}
            // onDelete={() => handleDeleteTask(index)}
            setTasks={setTasks}
            tasks={tasks}
            numberMyDay={numberMyDay}
            numberImportant={numberImportant}
            numberPersonal={numberPersonal}
            numberAssign={numberAssign}
            numberComplete={numberComplete}
            setNumberMyDay={setNumberMyDay}
            setNumberImportant={setNumberImportant}
            setNumberPersonal={setNumberPersonal}
            setNumberAssign={setNumberAssign}
            setNumberComplete={setNumberComplete}
            today={today}
            datefromcalen={datefromcalen}
          />
        ))}
        </div>
    );
}
 
export default TaskList;
import CompleteTask from "./CompleteTask";

const CompleteTaskList =  (props) => {
    const {tasks , setTasks ,numberMyDay ,numberImportant ,numberPersonal ,numberAssign ,numberComplete 
        ,setNumberMyDay ,setNumberImportant ,setNumberPersonal ,setNumberAssign ,setNumberComplete 
        ,today  , filteredCompleteTasksToday} = props
    return (  
        <div className="task-list">
            {filteredCompleteTasksToday.map((task, index) => (
            <CompleteTask
            key={index}
            task={task}
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
          />
        ))}
        </div>
    );
}
export default CompleteTaskList;
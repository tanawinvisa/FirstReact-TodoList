import TaskList from './TaskList.js';
import AddTask from './AddTask.js';
import { format, isYesterday, isTomorrow } from 'date-fns';


const Todo = (props) => {
    const {category , IsAdding , setIsAdding , tasks , setTasks ,filteredTasks 
      ,numberMyDay ,numberImportant ,numberPersonal ,numberAssign ,numberComplete 
      ,setNumberMyDay ,setNumberImportant ,setNumberPersonal ,setNumberAssign ,setNumberComplete,formatDateFn ,today 
      ,datefromcalen ,setDateFromCalen } = props
    const handleCloseAddTask = () => {
      setIsAdding(false);
    };
    console.info(tasks)
    const handleOpenAddTask = () => {
      setIsAdding(true)
      console.log(tasks)
    }
  
    const handleAddTask = (props) => {
      const { name ,type ,enddate, isCompleted , isFavorited , id} = props
      const newTask = {
        name,
        type,
        enddate,
        isCompleted,
        isFavorited,
        id,
      }

      if(type === "Important"){
        setNumberImportant(numberImportant+1)
      }else if (type === "Personal"){
        setNumberPersonal(numberPersonal+1)
      }else if(type === "Assigned to me"){
        setNumberAssign(numberAssign+1)
      }
      if(enddate === today){
        setNumberMyDay(numberMyDay+1)
      }

      console.log(newTask)
      if (!newTask) return
       setTasks([...tasks, newTask])
    }
  
    const handleDeleteTask = (index) => {
      const updatedTasks = [...tasks];
      console.log("here")
      console.log(tasks[index]);
      if(tasks[index].type === "Important"){
        setNumberImportant(numberImportant-1)
      }else if (tasks[index].type === "Personal"){
        setNumberPersonal(numberPersonal-1)
      }else if(tasks[index].type === "Assigned to me"){
        setNumberAssign(numberAssign-1)
      }
      if(tasks[index].enddate === today){
        setNumberMyDay(numberMyDay-1)
      }
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    };

    const currentDate = new Date();

    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const currentMonth = monthNames[currentDate.getMonth()]; // Get the name of the current month
    
    const currentYear = currentDate.getFullYear(); // Get the current year
  
    return (
        <div className="todo">
            <div className='todo-head'>
                <div className="left-head-todo">
                    <h1>{category}</h1>
                    <h3>{currentMonth} {currentYear}</h3>
                </div>
                <div className="right-head-todo">
                    {!IsAdding && (<button onClick={handleOpenAddTask}>+ New task</button>)}
                    {IsAdding &&
                        (<AddTask
                        onAddTask={handleAddTask}
                        onCloseAddTask={handleCloseAddTask}
                        filteredTasks={filteredTasks}
                        category={category}
                        formatDateFn={formatDateFn}
                        
                    />)}
                </div>
            </div>
          <TaskList
            setTasks={setTasks}
            filteredTasks={filteredTasks}
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
            handleDeleteTask={handleDeleteTask}
            today={today}
            datefromcalen={datefromcalen}
          />
        </div>
    );
}
 
export default Todo;

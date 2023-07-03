import TaskList from './TaskList';
import AddTask from './AddTask';


const Todo = (props) => {
    const {category , IsAdding , setIsAdding , tasks , setTasks ,filteredTasks 
      ,numberMyDay ,numberImportant ,numberPersonal ,numberAssign ,numberComplete 
      ,formatDateFn
      ,datefromcalen ,setDateFromCalen } = props

    const handleCloseAddTask = () => {
      setIsAdding(false);
    };

    const handleOpenAddTask = () => {
      setIsAdding(true)
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
          //! อันนี้มันจะไม่เข้าเคสไม่มี newTask มะ เพราะยังไงเรา ประกาศให้เป็น obj ที่มี key อยู่เสมอ
      // if (!newTask) return
       setTasks([...tasks, newTask])
    }

    const currentDate = new Date();

    const currentMonth = currentDate.toLocaleString('default', { month: 'long' })
    
    const currentYear = currentDate.getFullYear(); // Get the current year
  
    return (
        <div className="todo">
            <div className='todo-head'>
                <div className="left-head-todo">
                    <h1>{category}</h1>
                    <h3>{currentMonth} {currentYear}</h3>
                </div>
                <div className="right-head-todo">
                    {!IsAdding && (<button onClick={handleOpenAddTask}><div>+</div>New task</button>)}
                    {IsAdding &&
                        (<AddTask
                        onAddTask={handleAddTask}
                        onCloseAddTask={handleCloseAddTask}
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
            datefromcalen={datefromcalen}
            isTodo={true}
          />
        </div>
    );
}
 
export default Todo;

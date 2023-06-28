import Menu from './MenuBar.js';
import Reminder from './Reminder.js';
import Todo from './Todo.js';
import { useState } from 'react';

function App() {
  const [category , setCategory] = useState("My Day");
  const [IsAdding, setIsAdding] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [numberMyDay , setNumberMyDay] = useState(0);
  const [numberImportant , setNumberImportant] = useState(0);
  const [numberPersonal , setNumberPersonal] = useState(0);
  const [numberAssign , setNumberAssign] = useState(0);
  const [numberComplete , setNumberComplete] = useState(0);

  const [datefromcalen, setDateFromCalen] = useState(new Date());
  const formatDateFn = (date) => {
    const selectedDate = new Date(date)
    return selectedDate.getDate() + "/"+ parseInt(selectedDate.getMonth()+1) +"/"+ selectedDate.getFullYear();
}
  const today = formatDateFn(new Date());
  
  const filteredTasks = tasks.filter((task) => {
    if(category === "All"){
      return true;
    }
    if(category === "Complete"){
      return task.isCompleted === true;
    }
      if(category === "My Day"){
        return task.enddate === today;
      }
      if((category === "Important") ||( category === "Personal")|| (category === "Assigned to me")){
        return (task.type === category );
      }else{
        return task.enddate === formatDateFn(datefromcalen)
      }
    });

  const handleClickCategory = (name) => {
    const newcategory = {name};
    if(!newcategory) return
    setCategory(name);
    if(name === "My Day"){
      setDateFromCalen(new Date())
    }
  }

  return (
    <div className="App">
      <Menu 
        onClickCategory={handleClickCategory}
        numberMyDay={numberMyDay}
        numberImportant={numberImportant}
        numberPersonal={numberPersonal}
        numberAssign={numberAssign}
        numberComplete={numberComplete}
        tasks={tasks}
        formatDateFn={formatDateFn}
      />
      <Todo 
        category={category}
        IsAdding={IsAdding}
        setIsAdding={setIsAdding}
        tasks={tasks}
        setTasks={setTasks}
        filteredTasks={filteredTasks}
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
        formatDateFn={formatDateFn}
        today={today}
        datefromcalen={datefromcalen}
        setDateFromCalen={setDateFromCalen}
      />
      <Reminder 
        tasks={tasks}
        setTasks={setTasks}
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
        setDateFromCalen={setDateFromCalen}
        setCategory={setCategory}
        formatDateFn={formatDateFn}
      />
      
    </div>
  );
}

export default App;

import { useQuery } from '@apollo/client';
import MenuBar from './MenuBar';
import Reminder from './Reminder';
import Todo from './Todo';
import { useState } from 'react';
import { GET_USER } from './query.js';
import CATEGORIES from './ENUM_CATEGORIES';


function App() {
  const { data, loading } = useQuery(GET_USER)
  console.info(data, loading)
  const [category , setCategory] = useState("My Day");
  const [IsAdding, setIsAdding] = useState(false);
  const [tasks, setTasks] = useState([]);


  const formatDateFn = (date) => {
    const selectedDate = new Date(date)
    return selectedDate.getDate() + "/"+ parseInt(selectedDate.getMonth()+1) +"/"+ selectedDate.getFullYear();
}
  const today = formatDateFn(new Date());
  const [datefromcalen, setDateFromCalen] = useState(new Date());

  const getMyDayNumber = tasks.filter((task) => task.enddate === today)?.length
  const getImportantNumber = tasks.filter((task) => task.type === CATEGORIES?.important?.text )?.length
  const getPersonalNumber = tasks.filter((task) => task.type === CATEGORIES?.personal?.text )?.length
  const getAssignNumber = tasks.filter((task) => task.type === CATEGORIES?.assign?.text )?.length
  const getCompleteNumber = tasks.filter((task) => task.isCompleted === true)?.length

  
  const filteredTasks = tasks.filter((task) => {
    if(category === CATEGORIES?.all?.text ){
      return true;
    }
    if(category === CATEGORIES?.complete?.text ){
      return task.isCompleted === true;
    }
      if(category === CATEGORIES?.myDay?.text ){
        return task.enddate === today;
      }
      if((category === CATEGORIES?.important?.text ) ||( category === CATEGORIES?.personal?.text)|| (category === CATEGORIES?.assign?.text)){
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
      <MenuBar 
        onClickCategory={handleClickCategory}
        numberMyDay={getMyDayNumber}
        numberImportant={getImportantNumber}
        numberPersonal={getPersonalNumber}
        numberAssign={getAssignNumber}
        numberComplete={getCompleteNumber}
        tasks={tasks}
      />
      <Todo 
        category={category}
        IsAdding={IsAdding}
        setIsAdding={setIsAdding}
        tasks={tasks}
        setTasks={setTasks}
        filteredTasks={filteredTasks}
        numberMyDay={getMyDayNumber}
        numberImportant={getImportantNumber}
        numberPersonal={getPersonalNumber}
        numberAssign={getAssignNumber}
        numberComplete={getCompleteNumber}
        formatDateFn={formatDateFn}
        datefromcalen={datefromcalen}
        setDateFromCalen={setDateFromCalen}
      />
      <Reminder 
        tasks={tasks}
        setTasks={setTasks}
        numberMyDay={getMyDayNumber}
        numberImportant={getImportantNumber}
        numberPersonal={getPersonalNumber}
        numberAssign={getAssignNumber}
        numberComplete={getCompleteNumber}
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

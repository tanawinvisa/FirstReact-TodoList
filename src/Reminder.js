import React from 'react';
import Me from './Me'
import MyCalendar from './MyCalendar';
import TaskList from './TaskList';

const Reminder = (props) => {
    const { tasks , setTasks ,numberMyDay ,numberImportant 
        ,numberPersonal ,numberAssign ,numberComplete 
        ,today ,datefromcalen ,setDateFromCalen ,setCategory ,formatDateFn} = props

    // console.info("datefromcalen:",datefromcalen)

    const filteredCompleteTasksToday = tasks.filter((task) => {
        return task.enddate === formatDateFn(datefromcalen) && task.isCompleted
      });

    return (
        <div className="Reminder">
            <div className='Me'>
                <Me />
            </div>
            <div className="Calendar">
                <MyCalendar
                datefromcalen={datefromcalen}
                setDateFromCalen={setDateFromCalen}
                setCategory={setCategory}

                />
            </div>
            <div className='completed-task'>
                <h4>Completed tasks</h4>
                <TaskList 
                    setTasks={setTasks}
                    filteredTasks={filteredCompleteTasksToday}
                    tasks={tasks}
                    numberMyDay={numberMyDay}
                    numberImportant={numberImportant}
                    numberPersonal={numberPersonal}
                    numberAssign={numberAssign}
                    numberComplete={numberComplete}
                    today={today}
                    datefromcalen={datefromcalen}
                    setDateFromCalen={setDateFromCalen}
                    isTodo={false}
                />
            </div>
        </div>

    );
}
 
export default Reminder;
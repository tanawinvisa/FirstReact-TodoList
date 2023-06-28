import React, { useState } from 'react';
import Me from './Me.js'
import MyCalendar from './MyCalendar.js';
import CompleteTaskList from './CompleteTaskList.js';

const Reminder = (props) => {
    const { tasks , setTasks ,numberMyDay ,numberImportant 
        ,numberPersonal ,numberAssign ,numberComplete 
        ,setNumberMyDay ,setNumberImportant ,setNumberPersonal ,setNumberAssign ,setNumberComplete 
        ,today ,datefromcalen ,setDateFromCalen ,setCategory ,formatDateFn} = props

    console.info("datefromcalen:",datefromcalen)
    const filteredCompleteTasksToday = tasks.filter((task) => {
        if (task.enddate === formatDateFn(datefromcalen)) {
            if(task.isCompleted === true){
                return true
            }else{
                return false
            }
        } else {
          return false;
        }
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
                <CompleteTaskList 
                    setTasks={setTasks}
                    filteredCompleteTasksToday={filteredCompleteTasksToday}
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
                    setDateFromCalen={setDateFromCalen}
                    
                />
            </div>
        </div>

    );
}
 
export default Reminder;
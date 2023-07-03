import React , {useState} from 'react';
import SelectDate from './SelectDate';
import 'react-datepicker/dist/react-datepicker.css';
import CATEGORIES from './ENUM_CATEGORIES';

const AddTask = ( {onAddTask,onCloseAddTask ,formatDateFn}) => {
    //? state id เอาไว้ใช้ทำอะไร ?  
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    //? state isCompleted/isFavorited เอาไว้ใช้ทำอะไร ?


    const [enddate, setEnddate] = useState(formatDateFn(new Date()));
    const handleDateChange = (date) => {
        console.log(date)
        setEnddate(formatDateFn(date));
      };

    const handleSubmit = (e) => {
        // e.preventDefault();
        onAddTask({
            name:name || "Untitled",
            type:type || "No type",
            enddate:enddate,
            id:Math.floor(100000 + Math.random() * 900000),
            isCompleted: false,
            isFavorited: false,
        });
        setName('');
        setType('');
        setEnddate('');
        onCloseAddTask();
    };

    return (  
        <div className='add-task'>

        <form className="add-task-block" onSubmit={handleSubmit} >
            <button className="add-task-close-button" onClick={onCloseAddTask}>X</button>
            <h2>Add a task!</h2>
            <div className="task-detail">
                <input type="text" 
                    value={name} 
                    onChange={(e) => {
                        setName(e.target.value)}
                    }
                    placeholder="Task Name"
                    />
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="">Select Type</option>
                    <option value={CATEGORIES?.important?.text}>Important</option>
                    <option value={CATEGORIES?.personal?.text}>Personal</option>
                    <option value={CATEGORIES?.assign?.text}>Assigned to me</option>
                </select>
                <div>
                    <SelectDate 
                        onDateChange={handleDateChange}
                    />
                </div>
            </div>
            <button className="add-task-submit-button" type='submit'>Done</button>
            </form>

        </div>
    );
};
 
export default AddTask;

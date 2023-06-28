import React , {useState} from 'react';
import SelectDate from './SelectDate';
import 'react-datepicker/dist/react-datepicker.css';

const AddTask = ( {onAddTask,onCloseAddTask , filteredTasks , category ,formatDateFn}) => {
    const [id, setId] = useState()
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [isCompleted, setIsComplete] = useState(false)
    const [isFavorited, setIsFavorited] = useState(false)


    const [enddate, setEnddate] = useState(formatDateFn(new Date()));
    const handleDateChange = (date) => {
        console.log(date)
        setEnddate(date);
      };

    const handleSubmit = (e) => {
        console.info(id)
        // e.preventDefault();
        onAddTask({
            name:name || "Untitled",
            type:type || "No type",
            enddate:enddate,
            id:Math.floor(100000 + Math.random() * 900000),
            isCompleted,
            isFavorited,
        });
        setName('');
        setType('');
        setEnddate('');
        setId();
        onCloseAddTask();
        setIsComplete(false)
        setIsFavorited(false)
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
                    <option value="Important">Important</option>
                    <option value="Personal">Personal</option>
                    <option value="Assigned to me">Assigned to me</option>
                </select>
                <div>
                    <SelectDate 
                        enddate={enddate}
                        setEnddate={setEnddate}
                        onDateChange={handleDateChange}
                        formatDateFn={formatDateFn}
                    />
                </div>
            </div>
            <button className="add-task-submit-button" type='submit'>Done</button>
            </form>

        </div>
    );
};
 
export default AddTask;

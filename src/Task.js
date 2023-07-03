
const Task = (props) => {
    const { task, setTasks, tasks, isTodo} = props;
    const {name, type, enddate, isCompleted, isFavorited ,id} = task;

    const checkDate = (dateString) => {
        const givenDate = new Date(dateString.split('/').reverse().join('/'));
        const today = new Date()
        const currentDateString = today.toLocaleDateString('en-GB');
        const givenDateString = givenDate.toLocaleDateString('en-GB');
      
        if (givenDateString === currentDateString) {
          return 'Today';
        } else if (givenDate.getDate() === today.getDate() - 1) {
          return 'Yesterday';
        }else if (givenDate.getDate() === today.getDate() + 1){
            return 'Tomorrow';
        } else {
          return dateString;
        }
      };

    const enddateShow = checkDate(enddate);

    const setNewTask = (id, key, newValue) => {
      const newTasks = tasks.map((value) => {
        if (value.id !== id) return value
        return {
          ...value,
          [key]: newValue,
        }
      })
      setTasks(newTasks)
    }
    
    
    return ( 
        <div className="Task">
            <input
                type="checkbox"
                className="complete-checkbox"
                checked={isCompleted}
                onChange={() => {
                        setNewTask(id, 'isCompleted', !isCompleted)
                }
            }
            />
            <div className="task-left">
                    <h3 className="task-name">{name}</h3>
                    <div className="description">
                        <h6 className="task-type">{type}</h6>
                        <div className="task-dot"></div>
                        <p className="task-enddate">{enddateShow}</p>
                    </div>
            </div>
            <div className="task-right">
                {isTodo && (<button className="delete-task-button" onClick={
                  () => {
                    let index = 0;
                    const newTasks = tasks.map((value ,indexmap) => {
                        if (value.id === id) {
                          index = indexmap
                        }
                        return value;
                        
                        });
                    newTasks.splice(index, 1);
                    setTasks(newTasks);
                }}
                >delete</button>)}
                {/* { !isFavorited && (<label htmlFor={id} class="fa fa-star" id="star"></label>)}
                { isFavorited && (<label htmlFor={id} class="fa fa-star" id="star-checked"></label>)} */}
                {isTodo && (<label htmlFor={id} class="fa fa-star" id={isFavorited ? 'star-checked' : 'star'} />)}
                <input type="checkbox"
                 className="favorite-checkbox"
                    id={id} 
                    checked={isFavorited}
                    onChange={() => {
                      setNewTask(id,"isFavorited", !isFavorited);
                    }
                }
                />
                {/* <label for={id} class="star-label"></label> */}
            </div>
        </div>
     );
}
 
export default Task;
import { format, isYesterday, isTomorrow } from 'date-fns';

const Task = (props) => {
    const { task, onDelete, setTasks, tasks ,today 
        ,numberMyDay ,numberImportant ,numberPersonal ,numberAssign ,numberComplete 
        ,setNumberMyDay ,setNumberImportant ,setNumberPersonal ,setNumberAssign ,setNumberComplete ,datefromcalen} = props;
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
    
    
    return ( 
        <div className="Task">
            <input
                type="checkbox"
                className="complete-checkbox"
                checked={isCompleted}
                onChange={() => {
                    console.log(name,type,enddate,id)
                    const newTasks = tasks.map((value) => {
                        if (value.id === id) {
                            return {
                              ...value,
                              isCompleted: !isCompleted,
                            };
                          }
                          return value;
                        });
                        console.log(isCompleted)
                        if(!isCompleted){
                            setNumberComplete(numberComplete+1)
                            
                        }else if(isCompleted){
                            setNumberComplete(numberComplete -1)
                            
                        }
                        setTasks(newTasks);
                }
            }
            />
            <div className="task-left">
                <div>
                    <h3 className="task-name">{name}</h3>
                    <div className="description">
                        <h6 className="task-type">{type}</h6>
                        <h5 className="task-dot">•</h5>
                        <p className="task-enddate">{enddateShow}</p>
                    </div>
                </div>
            </div>
            <div className="task-right">
                <button className="delete-task-button" onClick={onDelete}>delete</button>
                <input type="checkbox"
                 className="favorite-checkbox"
                    id={id} 
                    checked={isFavorited}
                    onChange={() => {
                        console.log(name,type,enddate,id)
                        const newTasks = tasks.map((value) => {
                            if (value.id === id) {
                                return {
                                  ...value,
                                  isFavorited: !isFavorited,
                                };
                              }
                              return value;
                            });
                            setTasks(newTasks);
                    }
                }
                />
                <label for={id} class="star-label"></label>
            </div>
        </div>
     );
}
 
export default Task;
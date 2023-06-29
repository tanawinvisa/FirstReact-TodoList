import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Task = (props) => {
    const { task, setTasks, tasks ,today 
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
                        <div className="task-dot"></div>
                        <p className="task-enddate">{enddateShow}</p>
                    </div>
                </div>
            </div>
            <div className="task-right">
                {/* <button className="delete-task-button" onClick={onDelete}>delete</button> */}
                <button className="delete-task-button" onClick={
                  () => {
                    console.log(name,type,enddate,id)
                    let index = 0;
                    const newTasks = tasks.map((value ,indexmap) => {
                        if (value.id === id) {
                          index = indexmap
                        }
                        return value;
                        
                        });
                    console.log(newTasks)
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
                    newTasks.splice(index, 1);
                    setTasks(newTasks);
                        
                }
                }>delete</button>
                { !isFavorited && (<label for={id} class="fa fa-star" id="star"></label>)}
                { isFavorited && (<label for={id} class="fa fa-star" id="star-checked"></label>)}
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
                {/* <label for={id} class="star-label"></label> */}
            </div>
        </div>
     );
}
 
export default Task;
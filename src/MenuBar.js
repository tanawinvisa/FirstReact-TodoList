import Category from './Category';
import logo from './img/logo.png';
import MyDayicon from './img/flash.png';
import Importanticon from './img/important.png';
import Personalicon from './img/personal.png';
import Allicon from './img/all.png';
import Completeicon from './img/complete.png';
import Assignicon from './img/assign.png';
import Searchicon from './img/search.png';
import { useState } from 'react';

const MenuBar = ( props) => {
    const {onClickCategory , numberMyDay , numberImportant , numberPersonal , numberAssign ,numberComplete ,tasks ,formatDateFn} = props;
    return ( 
        <div className="menu-bar">
            <div className="logo-name">
                <img src={logo} className='logo-icon'></img>
                Konsys
            </div>
                <input className='search' placeholder='Search'>
                </input>
                

            <div className="categories-list">
                <h4>Categories</h4>
                <Category imageSrc={MyDayicon}  name="My Day"   number={numberMyDay} onClickCategory={onClickCategory}/>
                <Category imageSrc={Importanticon}  name="Important"   number={numberImportant} onClickCategory={onClickCategory}/>
                <Category imageSrc={Personalicon}  name="Personal"   number={numberPersonal} onClickCategory={onClickCategory}/>
                <Category imageSrc={Allicon}  name="All"   number={tasks.length} onClickCategory={onClickCategory}/>
                <Category imageSrc={Completeicon}  name="Complete"   number={numberComplete} onClickCategory={onClickCategory}/>
                <Category imageSrc={Assignicon}  name="Assigned to me"   number={numberAssign} onClickCategory={onClickCategory}/>
            </div>
        </div>
     );
}
 
export default MenuBar;

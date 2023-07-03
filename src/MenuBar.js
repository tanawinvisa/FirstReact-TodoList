import Category from './Category';
import logo from './img/logo.png';
import MyDayicon from './img/flash.png';
import Importanticon from './img/important.png';
import Personalicon from './img/personal.png';
import Allicon from './img/all.png';
import Completeicon from './img/complete.png';
import Assignicon from './img/assign.png';
import CATEGORIES from './ENUM_CATEGORIES'
import Searchicon from './img/search.png';

//! พวกค่าที่ fix value ที่มีการใช้ซ้ำ ควรสร้างเป็น enum เช่น My Day, Important etc. เอาไปสร้าง อยู่ใน ไฟล์ใหม่ แล้วเอามาเรียกใช้

const MenuBar = ( props) => {
    const {onClickCategory , numberMyDay , numberImportant , numberPersonal , numberAssign ,numberComplete ,tasks} = props;
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
                <Category imageSrc={MyDayicon}  name={CATEGORIES?.myDay?.text}   number={numberMyDay} onClickCategory={onClickCategory}/>
                <Category imageSrc={Importanticon}  name={CATEGORIES?.important?.text}   number={numberImportant} onClickCategory={onClickCategory}/>
                <Category imageSrc={Personalicon}  name={CATEGORIES?.personal?.text}   number={numberPersonal} onClickCategory={onClickCategory}/>
                <Category imageSrc={Allicon}  name={CATEGORIES?.all?.text}   number={tasks.length} onClickCategory={onClickCategory}/>
                <Category imageSrc={Completeicon}  name={CATEGORIES?.complete?.text}   number={numberComplete} onClickCategory={onClickCategory}/>
                <Category imageSrc={Assignicon}  name={CATEGORIES?.assign?.text}   number={numberAssign} onClickCategory={onClickCategory}/>
            </div>
        </div>
     );
}
 
export default MenuBar;

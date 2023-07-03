//* short hand ---> padding: 8px 0px (padding: 8px 0px 8px 0px) // padding: 8px (padding: 8px)
//* css selector ---> help prevent multiple class

//* .right-head-todo ---> display: flex; align-items: center จริงๆสามารถใส่ที่ .todo-head ได้เลยนะ
//* .right-head-todo button div ---> สามารถใส่ margin: -2px แทน relative bottom 2px ได้นะ

//! อันไหนในระบบไม่ใช้ ---> ให้เคลียทิ้ง เช่น console.log / class ที่เกินมา
//! .todo-head ---> ไม่ควรต้อง set marginleft/right นะ ถ้าสมมติใน component Todo มีอีก 20 element เราจะต้องมานั่งเซททุกตัว แล้วเวลาแก้ต้องมานั่งไล่แก้ทุกตัวอีก
//! solution ที่ดีคือ set padding ที่ .todo ให้จบที่เดียว บนล่างซ้ายขวา
//! .todo ไม่ใช้ padding margin ปนกัน ---> เลือกใข้อย่างใดอย่างนึง

//? .todo-head --> ไม่จำเป็นต้องใส่ width 100% เพราะ ? 
//มันตรงอยู่แล้ว
//? .todo-head h1 กับ .left-head-todo h1 ---> เหมือนกันไหม ถ้าเหมือนกันทำไมถึงเขียนแยกกัน ? 
//ควรเขียนรวมกัน
//? .right-head-todo button div ---> ทำไมต้องใส่ flex center center ? 
//ไม่ต้องใส่ก็ได้ครับ
//? Task.js ตรง class task-left ---> ทำไมต้องมี div คลุมอีกชั้น ? 
//ไม่ต้องคับ
//? .task-left h5 ---> ได้ใช้มั้ย ? 
//ไม่
//? .description ---> ทำไมต้องใส่ flex-direction: row; ? 
//ไม่ต้อง
//? .delete-task-button ---> ทำไมต้องใส่ flex center center ?
//ไม่ต้อง
//? .me img ---> why flex ?
//ไม่ต้อง
//? .me-text ---> why width: 100% ?
//? .me-icon ---> why 100% flex flex-end ?
//? .me-icon ---> ทำไม img ต้องเรียก me-icon ?


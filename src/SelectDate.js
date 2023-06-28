import DatePicker from 'react-datepicker'
import { useState } from 'react';
const SelectDate = ( props) => {
    const {enddate , setEnddate , onDateChange , formatDateFn} = props
    const [date , setDate] = useState(new Date())

    
    return (  
        <div className="select-date">
            <DatePicker selected={date} onChange={(date) => {
                console.log("date")
                console.log(date)
                setDate(date)
                onDateChange(formatDateFn(date))
                }}  dateFormat="dd/MM/yyyy"
                defaultValue={new Date()}
                />
        </div>
    );
}
 
export default SelectDate;
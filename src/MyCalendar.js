import Calendar from 'react-calendar';
import enUS from 'date-fns/locale/en-US';
import { format } from 'date-fns';


const MyCalendar = (props) => {
    const {datefromcalen,setDateFromCalen ,setCategory } = props

    const handleDateClick = (date) => {
        setDateFromCalen(date);
        // Perform any additional actions with the selected date
        const formattedDate = format(date, 'dd/MM/yyyy');
        console.log(formattedDate);
        console.log('Selected Date:', date);
        // if(formattedDate === format(new Date(), 'dd/MM/yyyy')){
        //     setCategory("My Day")
        // }
      };

    return (  
        <div className='MyCalendar'>
        <Calendar onChange={setDateFromCalen} value={datefromcalen} locale={enUS} onClickDay={handleDateClick}
        />
    </div>
    );
}
 
export default MyCalendar;
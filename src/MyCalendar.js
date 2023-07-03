import Calendar from 'react-calendar';
import enUS from 'date-fns/locale/en-US';


const MyCalendar = (props) => {
    const {datefromcalen,setDateFromCalen ,setCategory } = props

    const handleDateClick = (date) => {
        setDateFromCalen(date);
      };

    return (  
        <div className='MyCalendar'>
        <Calendar onChange={setDateFromCalen} value={datefromcalen} locale={enUS} onClickDay={handleDateClick}
        />
    </div>
    );
}
 
export default MyCalendar;
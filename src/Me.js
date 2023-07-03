import profile from './img/mecrop.jpeg';
import bell from './img/notification.png';
import setting from './img/setting.png'


const Me = () => {
    return (  
        <div className="me">
            <img src={profile} class="me-profile-img" />
            <div className='me-text'>
                <h3>Tanawin Visa</h3>
                <p>tanawin@kons.com</p>
            </div>
            <div className="me-icon">
                <img src={bell} />
                <img src={setting} />
            </div>
        </div>
    );
}
 
export default Me;

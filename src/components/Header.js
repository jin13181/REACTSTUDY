import '../css/Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
      <div id="top">
            <h3>
                <Link to="/">PHP 프로그래밍 입문</Link>
            </h3>
            <ul id="top_menu">  
            <li><Link to="/register" >회원 가입(11장)</Link> </li>
                <li> | </li>
            <li><Link to="/login" >로그인(12장)</Link></li>
            </ul>
      </div>
      
    );
  }
  
  export default Header;
  
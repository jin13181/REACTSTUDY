import '../css/Nav.css'
import { Link } from 'react-router-dom';


function Nav() {
  return (
        <div id="menu_bar">
            <ul>  
                <li><Link to='/'>HOME</Link></li>
                <li><Link to="/message">쪽지 만들기(13장)</Link></li>                                
                <li><Link to="/board">게시판 만들기(14장)</Link></li>
                <li><Link to="/">사이트 완성하기(15장)</Link></li>
            </ul>
        </div>
  );
}

export default Nav;

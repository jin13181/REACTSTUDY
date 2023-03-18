import '../css/Login.css'
import login from '../images/login.png'
import kakaoLogin from '../images/kakao_login.png'



function Login() {
  return (
    <div id="login_box">
    <div id="login_title">
        <span>로그인</span>
    </div>
    <div id="login_form">
        <form  name="login_form" method="post" action="">		       	
            <ul>
            <li><input type="text" name="id" placeholder="아이디" /></li>
            <li><input type="password" id="pass" name="pass" placeholder="비밀번호" /></li> 
            </ul>
            <div id="login_btn">
                <a href="#"><img src={login}/></a>
            </div>		    	
        </form>
        <div id='social_login_btn'>
            <a href="https://kauth.kakao.com/oauth/authorize?client_id=4bf5390b8a0cbfd6547db07b83e362e4&redirect_uri=http://localhost/cms/social_login.php&response_type=code"><img src={kakaoLogin} alt='kakao_login' /></a>
        </div>
    </div> 
</div>
  );
}

export default Login;

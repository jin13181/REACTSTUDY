import '../css/Register.css'
import resetBtn from '../images/button_reset.gif'
import checkId from '../images/check_id.gif'
import saveBtn from '../images/button_save.gif'

function Register() {
    return (
        <div id="join_box">
        <form  name="member_form" method="post" action="">
          <h2>회원 가입</h2>
              <div className="form id">
                  <div className="col1">아이디</div>
                  <div className="col2">
                      <input type="text" name="id"/>
                  </div>  
                  <div className="col3">
                      <a href="#"><img src={checkId}/></a>
                  </div>                 
                 </div>
                 <div className="clear"></div>

                 <div className="form">
                  <div className="col1">비밀번호</div>
                  <div className="col2">
                      <input type="password" name="pass"/>
                  </div>                 
                 </div>
                 <div className="clear"></div>
                 <div className="form">
                  <div className="col1">비밀번호 확인</div>
                  <div className="col2">
                      <input type="password" name="pass_confirm"/>
                  </div>                 
                 </div>
                 <div className="clear"></div>
                 <div className="form">
                  <div className="col1">이름</div>
                  <div className="col2">
                      <input type="text" name="name"/>
                  </div>                 
                 </div>
                 <div className="clear"></div>
                 <div className="form email">
                  <div className="col1">이메일</div>
                  <div className="col2">
                      <input type="text" name="email1"/>@<input type="text" name="email2"/>
                  </div>                 
                 </div>
                 <div className="clear"></div>
                 <div className="bottom_line"> </div>
                 <div className="buttons">
                  <img  src={saveBtn}/>&nbsp;
                    <img id="reset_button"  src={resetBtn}/>
                 </div>
        </form>
      </div>
      
    );
  }
  
  export default Register;
  



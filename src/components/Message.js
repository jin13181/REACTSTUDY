import '../css/Message.css'


function Message() {
  return (
    <div id="message_box">
    <h3 id="write_title">
            쪽지 보내기
    </h3>
    <ul className="top_buttons">
            <li><span><a href="">수신 쪽지함 </a></span></li>
            <li><span><a href="">송신 쪽지함</a></span></li>
    </ul>
    <form  name="message_form" method="post" action="">
        <div id="write_msg">
            <ul>
            <li>
                <span className="col1">보내는 사람 : </span>
                <span className="col2"></span>
            </li>	
            <li>
                <span className="col1">수신 아이디 : </span>
                <span className="col2"><input name="rv_id" type="text"/></span>
            </li>	
            <li>
                <span className="col1">제목 : </span>
                <span className="col2"><input name="subject" type="text"/></span>
            </li>	    	
            <li id="text_area">	
                <span className="col1">내용 : </span>
                <span className="col2">
                    <textarea name="content"></textarea>
                </span>
            </li>
            </ul>
            <button type="button" >보내기</button>
        </div>	    	
    </form>
</div>
  );
}

export default Message;

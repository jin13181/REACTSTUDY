import '../css/BoardList.css'
import { Link } from 'react-router-dom';


function BoardList() {
    const boardList= () => {
        window.location.href='/boardlist'
    }

    const board= () => {
        window.location.href='/board'
    }

  return (
    <div id="board_box">
    <h3>
        게시판 > 목록보기
    </h3>
    <ul id="board_list">
            <li>
                <span className="col1">번호</span>
                <span className="col2">제목</span>
                <span className="col3">글쓴이</span>
                <span className="col4">첨부</span>
                <span className="col5">등록일</span>
                <span className="col6">조회</span>
            </li>
            <li>
					<span className="col1"></span>
					<span className="col2"><a href=""></a></span>
					<span className="col3"></span>
					<span className="col4"></span>
					<span className="col5"></span>
					<span className="col6"></span>
				</li>	
				</ul>
			<ul id="page_num"> 	
            <li><b></b></li>
            <li><a href=''> </a></li>
            <li> <a href=''>다음 ▶</a> </li>
            <li>&nbsp;</li>
            </ul>

            <ul className="buttons">
				<li><button onClick={boardList}>목록</button></li>
				<li><button onClick={board}>글쓰기</button></li>
			</ul>
	</div>
  );
}

export default BoardList;

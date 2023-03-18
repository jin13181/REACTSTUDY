import '../css/Board.css'
import { useForm } from "react-hook-form";
//react-hook-form은 react를 이용하여 개발할 때 유효성을 체크할 수 있게 도와주는 모듈
import { useMutation } from "react-query";
import { boardWrite } from "../api";


function Board() {
    const boardList= () => {
        window.location.href='/boardlist'
    }

	const mutation = useMutation(boardWrite);
	// mutation은 데이터를 생성 / 업데이트 / 삭제 할 때 사용 
	// React Query를 이용해 서버에 데이터 변경 작업을 요청할 때 사용
	// 여기서는 boardWirte가 mutationFn으로 사용되고있다
	// mutationFn이란?
	// promise 처리가 이루어지는 함수
	// 다른 말로는 axios를 이용해 서버에 API를 요청하는 부분
	// 참고 : https://jforj.tistory.com/244
	
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = ({title, txt}) => {
		mutation.mutate({title, txt})
	}

  return (
    <div id="board_box">
	    <h3 id="board_title"> 게시판 > 글 쓰기</h3>
	    <form  name="board_form" onSubmit={handleSubmit(onSubmit)}>
	    	 <ul id="board_form">
				<li>
					<span className="col1">이름 : </span>
					<span className="col2"></span>
				</li>		
	    		<li>
	    			<span className="col1">제목 : </span>
	    			<span className="col2">
						<input name="subject" type="text"
					  {...register("title")} /></span>
	    		</li>	    	
	    		<li id="text_area">	
	    			<span className="col1">내용 : </span>
	    			<span className="col2">
	    				<textarea name="content" 
						{...register("txt")}></textarea>
	    			</span>
	    		</li>
	    		<li>
			        <span className="col1"> 첨부 파일</span>
			        <span className="col2"><input type="file" name="upfile" /></span>
			    </li>
	    	    </ul>
	    	<ul className="buttons">
				<li><button type="submit" >완료</button></li>
				<li><button type="button" onClick={boardList} >목록</button></li>
			</ul>
	    </form>
	</div>
        
  );
}

export default Board;

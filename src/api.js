const BASE_PATH = "http://localhost:4000/api/v1";


// MutationFn
// mutationFn이란?
// promise 처리가 이루어지는 함수
// 다른 말로는 axios를 이용해 서버에 API를 요청하는 부분
// 참고 : https://jforj.tistory.com/244
export async function boardWrite({title, txt}) {
    return await fetch(`${BASE_PATH}/boardWrite`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include", 
        body: JSON.stringify({title, txt})
    }).then(response => response.json())
}
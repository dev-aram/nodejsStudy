import express from "express";
import morgan from "morgan";
import studyRouter from "../Server/router/study.js"

// nodejs에 기본적으로 있든 html 기능을 더욱 쓰기 간편하게 만든 라이브러리 미들웨어
const app = express();

app.use(express.json());
// 서버 전송 로그를 자세하게 보여주는 미들웨어

// 미들웨어
// 요청과 응답의 중간(middle, 미들)에 위치하여 미들웨어 라고 부른다.
// 미들웨어는 요청과 응답을 조작하여 기능을 추가하기도 하고, 나쁜 요청을 걸러내기도 한다.
app.use(morgan("dev"));


// 라우터
app.use("/studys", studyRouter);

// 라우터를 타지 않았을 경우에 보여주는 에러페이지
app.use((req, res, next)=>{
    res.sendStatus(404);
})
// 포트 설정
app.listen(8080)
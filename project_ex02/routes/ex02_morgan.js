const express = require('express');
const morgan = require('morgan');
const app = express();

// morgan 미들웨어 등록 (먼저 모듈 설치: npm i morgan)
app.use(morgan('dev'));
// morgan에서 자주 쓰는 모드
// dev, combined, common, short, tiny ...
// dev: 개발용, 컬러 표시, 간한하고 빠름.
// combined: Apache 표준 로그 포맷
// common: 일반적인 로그 포맷
// short : 짧은 로그
// tiny: 최소한의 정보 표시

app.get('/', (req, res) => {
    res.send('Hellod Morgan!');
});
// Morgan 로그 출력 예시
/*
server started on http://localhost:3000
GET / 200 3.527 ms - 14
GET /favicon.ico 404 2.630 ms - 150
GET / 304 1.307 ms - -
*/

app.listen(3000, () => console.log('server started on http://localhost:3000'));
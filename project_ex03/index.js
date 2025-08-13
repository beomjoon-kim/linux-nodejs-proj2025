const http = require('http');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.set('PORT', process.env.PORT || 3000);
// index페이지에 있어야 한다.
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// seve-static 미들웨어
app.use(express.static(path.join(__dirname, 'public')));

// 서브 모듈을 미들웨어로 등록
app.use('/00', require('./routes/ex00'));
app.use('/01', require('./routes/ex01'));
app.use('/02', require('./routes/ex02'));

const server = http.createServer(app);
server.listen(app.get('PORT'), () => {
    console.log(`Run on server: http://localhost:${app.get('PORT')}`);
});

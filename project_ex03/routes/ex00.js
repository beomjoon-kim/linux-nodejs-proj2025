const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');



// router를 이용해서 path 라우팅
router.get('/', (req, res) => {
    req.app.render('ex00', {}, (err, html) => {
        res.end(html);
    });
    // res.send(`<html>
    //     <body>
    //         <h2>ex00.js 서브모듈</h2>
    //         <p><a href="/">홈으로 이동</a></p>
    //     </body>
    // </html>`);
});

// 프로젝에 새 모듈로 등록 됨.
module.exports = router;
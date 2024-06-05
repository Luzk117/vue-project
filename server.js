const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: 'http://localhost:8080', // 允许的源
    optionsSuccessStatus: 200 // 一些老旧的浏览器（IE11等）会误认为204状态有问题
};

app.use(cors(corsOptions)); // 使用带有配置选项的cors中间件

// 解析 application/json
app.use(bodyParser.json());

// MySQL 连接配置
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'project'
});

// 连接到 MySQL
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database.');
});

// 处理根路径GET请求
app.get('/', (req, res) => {
    res.send('Hello, this is the root path of the server!');
});

// 处理注册请求
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
        connection.query(query, [username, password], (err, results) => {
            if (err) {
                res.json({ success: false, message: '数据库错误: ' + err.message });
            } else {
                res.json({ success: true, message: '用户注册成功' });
            }
        });
    } else {
        res.json({ success: false, message: '用户名和密码不能为空' });
    }
});

// 处理登录请求
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
        connection.query(query, [username, password], (err, results) => {
            if (err) {
                res.json({ success: false, message: '数据库错误: ' + err.message });
            } else if (results.length > 0) {
                // 登录成功，生成一个简单的令牌（在实际应用中，应使用更安全的方法）
                const token = 'your_token';
                res.json({ success: true, token: token });
            } else {
                res.json({ success: false, message: '账号或密码错误' });
            }
        });
    } else {
        res.json({ success: false, message: '用户名和密码不能为空' });
    }
});

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

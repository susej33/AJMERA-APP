const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// In-memory user storage
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  {id: 2, username: 'admin', password: 'admin'}
];

// Secret key for JWT
const secretKey = 'your_secret_key';

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const token = jwt.sign({ userId: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.json({ error: 'Invalid credentials', token: '' });
  }
});

// Authorization middleware
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ error: 'Access denied' });

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });

    req.user = user;
    next();
  });
};

// Protected route
app.get('/api/dashboard', authenticateToken, (req, res) => {
  // Access user information via req.user
  res.json({ message: 'Welcome to the dashboard!', user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
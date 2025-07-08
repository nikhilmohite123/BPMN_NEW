import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import connection from './config/config.js'
import loginRoute from './routes/loginController/loginRoutes.js'
import globalRoute from './routes/globalController/globalRoutes.js'

dotenv.config()
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Test Route
app.get('/test', (req, res) => {
  res.json({ message: 'Test route working!' });
});

app.use('/api', loginRoute)
app.use('/global', globalRoute)

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM tbl_employee', (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).json({ error: 'Failed to fetch users' });
    }
    res.json(results); // send DB response
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import express from 'express';
import fightersRoutes from './routes/fighters.js';
const app = express(); 
const PORT = 4000;

app.use(express.json());
app.use('/fighters', fightersRoutes);
app.get('/', (req, res) => res.send('Hello from Homepage'));
app.listen(PORT, ()=> console.log(`server rrunning on port : http://localhost:${PORT}`));

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();
const tasksRouter = require('./routes/tasks.routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/tasks', tasksRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

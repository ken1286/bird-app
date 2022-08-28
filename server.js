const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware');
const groupRoutes = require('./routes/groupRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/groups', groupRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

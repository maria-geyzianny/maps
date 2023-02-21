const express = require('express');
const routes = express.Router('./Routes/routes');
const app = express();
app.use(express.json());
app.use('/api', routes);
app.listen(process.env.PORT || 3000);

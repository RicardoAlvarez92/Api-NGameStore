const express = require('express');
const app = express();
const cors = require('cors');
//environment viariables
const dotenv = require('dotenv');
dotenv.config({path:'./.env'});

// Configure CORS to allow requests from any origin (*).
app.use(cors());

const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes');
const itemRoutes = require('./routes/itemRoutes');
const shippingMethodRoutes = require('./routes/shippingMethodRoutes');
const orderRoutes = require('./routes/orderRoutes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 3000

app.use('/ngamestore/api/v1/', 
userRoutes,
loginRoutes,
itemRoutes,
shippingMethodRoutes,
orderRoutes);


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
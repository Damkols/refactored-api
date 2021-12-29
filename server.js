import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

//Routes
import productsRoutes from './routes/products.js';

const app = express();

const PORT = process.env.PORT || 5000;

// BodyParser Middleware
app.use(bodyParser.json());


// Connect to MongoDb
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
.then(() => console.log('MongoDb connected!'))
.catch(err => console.log(err));


//Products routes
app.use('/products', productsRoutes);


app.get('/', (req, res) => {
    res.send(`Hello from Homepage!`);
});

app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`));
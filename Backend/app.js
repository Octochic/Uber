const dotenv= require('dotenv');
dotenv.config();
const express =require ('express');
const cors= require('cors');
const cookieParser = require('cookie-parser');
const connectToDb= require('./db/db')
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const app = express();
// app.use(express.json());
const mapsRoutes =require('./routes/maps.routes');
const rideRoutes= require('./routes/ride.routes');
const authMiddleware = require('./middlewares/auth.middleware')



connectToDb();

app.use(cors({
    origin: 'http://localhost:5173', // Your frontend URL
  credentials: true
}));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());


app.get('/',(req, res)=>{
    res.send('Hello World');
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);


module.exports=app

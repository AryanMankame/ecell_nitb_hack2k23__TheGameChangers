const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const orderRouter = require('./orders')
const authRouter = require('./auth')
app.use(cors())
app.use(bodyParser())
app.use('/orders',orderRouter)
app.use('/auth',authRouter)
const mongoose = require('mongoose');
const password = encodeURIComponent("")
const connection_url = `mongodb+srv://aryan672002:${password}@cluster0.tqm8j4u.mongodb.net/test?retryWrites=true&w=majority`
mongoose.connect(connection_url,{ useNewUrlParser: true })
const db = [{
              mobile:"100",
              lng:122.42,
              lat:32.21
            },
            {
                mobile:"200",
                lng:42.42,
                lat:20.21
            },
            {
                mobile:"300",
                lng:22.42,
                lat:92.21
            }
        ]
const server = app.listen(process.env.PORT || 3004,() => {
    console.log("Listening carefully...");
})

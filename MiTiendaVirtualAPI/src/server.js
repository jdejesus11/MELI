require('dotenv').config();
var express = require('express');
var app = express();
var cors = require('cors');
var indexRouter = require('./routers/indexRouter')
var bodyParser = require('body-parser')
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
 
app.use(cors())

app.get("/api/items/:id",indexRouter.productDetail);
app.get("/api/items",indexRouter.products);

// Start the Server
app.listen( port, () => {
    console.log( `Server running at port ${port}` );
    console.log( `press CTRL+C to stop server` );
});
require('dotenv').config();
const dbConnection = require('./db/index.js');
const app = require('./app.js');

const PORT = process.env.PORT|| 8000 ;


// when a asynchronus function is completed it always return a promise , database connection returns a promise
dbConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

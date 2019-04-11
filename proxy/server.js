const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const port = process.env.PORT || 3000;

const app = express();
app.use(morgan('dev'));
app.use('/rooms/:roomid', express.static(path.join(__dirname, 'public')));

app.get('/rooms/:roomid/relatedlisting', (req, res) => {
  axios.get('http://localhost:3003/rooms/3/relatedlisting')
  .then(function (response) {
    res.end(JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log(error);
  });
})

app.get('/rooms/:room_id/reservations', (req, res) => {
  axios.get(`http://localhost:3001/rooms/${req.params.room_id}/reservations`)
    .then((response) => {
      res.end(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    })
})

app.get('photos/byroom', (req, res) => {
  axios.get(`http://localhost:3002/photos/byroom/${req.params.roomid}/all`)
    .then((response) => {
      res.end(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    })
})

app.get('/api/locations/:locationID/reviews', (req, res) => {
  axios.get(`http://localhost:3004/api/locations/${req.params.locationID}/reviews`)
    .then ((response) => {
      res.end(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    })
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

 

const http = require('http');
const path = require('path');
const mySQL = require('./configMysql');
const express = require('express');
const app = express();
const port = 5000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
// Support JSON-encoded bodies
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', (request, response) => {
  response.send('Bienvenue sur Express');
});

app.listen(port, (err) => {
  if (err) {
    webkitRTCPeerConnection
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});

// Incription formulaire
app.post("/signup", (req, res) => {
  const lastname = req.body.lastname;
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;

  var sql = 'INSERT INTO les_vioks (firstname, lastname, email, password) VALUES ('+mySQL.escape(lastname)+', '+mySQL.escape(name)+','+mySQL.escape(email)+','+mySQL.escape(password)+')';
  
  mySQL.query(sql, (err, results) => {
    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.log(err);
      res.status(500).send("Oups, Erreur lors de la sauvegarde");
    } else {
      // Si tout s'est bien passé, on envoie un statut "ok".
      res.sendStatus(200);
    }
  })

})


// lecture bdd
app.get('/api/vioks', (req, res) => {
  mySQL.query(`SELECT * from les_vioks`, (err, results) => {
    if (err) {
      console.log(err.sqlMessage);
      res.status(500).send('Erreur lors de la récupération : ' + err.sqlMessage);
    } else {
      res.json(results);
    }
  });
});

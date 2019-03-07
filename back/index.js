const mySQL = require('./configMysql');
const express = require('express');
const app = express();
const port = 5000;

const bodyParser = require('body-parser');
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (request, response) => {
  response.send('Bienvenue sur Express');
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});

// // écoute de l'url "/api/employees"
// app.put('/api/movies/:id', (req, res) => {

//   // récupération des données envoyées
//   const idFilm = req.params.id;
//   const formData = req.body;

//   // connection à la base de données, et insertion de l'employé
//   mySQL.query('UPDATE movie SET ? WHERE id = ?', [formData, idFilm], err => {

//     if (err) {
//       // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
//       console.log(err);
//       res.status(500).send("Erreur lors de la modification d'un employé");
//     } else {

//       // Si tout s'est bien passé, on envoie un statut "ok".
//       res.sendStatus(200);
//     }
//   });
// });

// // écoute de l'url "/api/movies"
// app.put('/api/movies', (req, res) => {

//   // récupération des données envoyées
//   const formData = req.body;
//   const idFilm = req.body.id;

//   // connection à la base de données, et insertion du film
//   mySQL.query('UPDATE movie SET ? WHERE id = ?', [formData, idFilm], err => {

//     if (err) {
//       // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
//       console.log(err);
//       res.status(500).send("Erreur lors de la modification du film");
//     } else {

//       // Si tout s'est bien passé, on envoie un statut "ok".
//       res.sendStatus(200);
//     }
//   });
// });

// // écoute de l'url "/api/movies" avec le verbe POST
// app.post('/api/movies', (req, res) => {

//   // récupération des données envoyées
//   const formData = req.body;

//   // connexion à la base de données, et insertion du film
//   mySQL.query('INSERT INTO movie SET ?', formData, (err, results) => {

//     if (err) {
//       // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
//       console.log(err);
//       res.status(500).send("Oups, Erreur lors de la sauvegarde du film");
//     } else {
//       // Si tout s'est bien passé, on envoie un statut "ok".
//       res.sendStatus(200);
//     }
//   });
// });


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

app.get('/api/vioks/names', (req, res) => {
  mySQL.query(`SELECT lastname from les_vioks`, (err, results) => {
    if (err) {
      console.log(err.sqlMessage);
      res.status(500).send('Erreur lors de la récupération : ' + err.sqlMessage);
    } else {
      res.json(results);
    }
  });
});
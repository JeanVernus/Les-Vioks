const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost', // adresse du serveur
    user: 'wilder', // le nom d'utilisateur
    password: '6144', // le mot de passe
    database: 'sqlquests', // le nom de la base de données
});
module.exports = connection;
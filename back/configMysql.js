const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost', // adresse du serveur
    user: 'root', // le nom d'utilisateur
    password: 'Serval7*', // le mot de passe
    database: 'sqlquests', // le nom de la base de données
});
module.exports = connection;
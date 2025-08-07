// server/database/connection.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'cursos.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error('❌ Error conectando BD', err);
  else console.log('📦 Conectado a SQLite');
});

module.exports = db;
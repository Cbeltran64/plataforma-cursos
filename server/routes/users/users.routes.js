const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth.middleware');

// Solo admin y coordinador pueden listar usuarios
router.get('/', auth(['admin', 'coordinator']), (req, res) => {
  res.json({ msg: 'Listado de usuarios' });
});

module.exports = router;
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  console.log('Yeni sifariş gəldi:', req.body);
  res.status(201).json({ ok: true, message: 'Sifariş uğurla alındı' });
});

module.exports = router;

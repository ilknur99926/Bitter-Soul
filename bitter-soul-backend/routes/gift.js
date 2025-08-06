
const express = require('express');
const router = express.Router();

const gifts = [];

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const filePath = path.join(__dirname, '../data/gifts.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Oxunmadı' });

    let gifts = JSON.parse(data);
    gifts = gifts.filter(g => g.id !== id);

    fs.writeFile(filePath, JSON.stringify(gifts, null, 2), err => {
      if (err) return res.status(500).json({ message: 'Yazılmadı' });
      res.status(200).json({ message: 'Silindi' });
    });
  });
});


router.get('/', (req, res) => {
  res.json(gifts);
});

router.post('/', (req, res) => {
  const gift = req.body;
  gifts.push(gift);
  console.log('Yeni qəhvə hədiyyə edildi:', gift);
  res.status(200).json({ message: 'Qəhvə əlavə olundu' });
});

module.exports = router;

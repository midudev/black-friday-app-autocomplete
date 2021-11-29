import db from "db.json";

export default function handler(req, res) {
  const { id, q } = req.query;

  if (id) {
    const item = db.find((item) => item.id === +id);
    return res.status(200).json(item);
  } else if (q) {
    const results = db.filter((product) => {
      const { title } = product;
      return title.toLowerCase().includes(q.toLowerCase());
    });
    return res.status(200).json(results);
  }

  res.status(400).json();
}

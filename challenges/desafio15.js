db.produtos.updateMany(
  {},
  { $set: { avaliacao: NumberInt(0) } },
);

db.produtos.updateMany(
  { tags: { $in: [/bovino/i] } },
  { $set: { avaliacao: NumberInt(5) } },
);
db.produtos.updateMany(
  { tags: { $in: [/ave/i] } },
  { $set: { avaliacao: NumberInt(3) } },
);

db.produtos.find({}, 
  { _id: false, nome: true, avaliacao: true });

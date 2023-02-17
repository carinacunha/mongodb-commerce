db.produtos.find(
  { $and: [
    { curtidas: { $ne: 50 } }, 
    { tags: { $exists: false } },
  ] },
  
  { nome: true, vendidos: true, _id: false },
).pretty();
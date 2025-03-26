/*1*/
db.examnosql.insertMany([
  {
    nom: "Lego Creator 3-in-1",
    annee_sortie: 2020,
    nombre_de_pieces: 564,
    prix: 59.99,
    evaluations: [
      {
        utilisateur: "Charlie",
        note: 4,
      },
    ],
  },
  {
    nom: "Faucon Millenium",
    annee_sortie: 2019,
    nombre_de_pieces: 1050,
    prix: 89.99,
    theme: "Star Wars",
    evaluations: [
      {
        utilisateur: "David",
        note: 5,
      },
      {
        utilisateur: "Eve",
        note: 3,
      },
    ],
  },
]);

/*2*/
db.examnosql.updateOne(
  { nom: "Lego Creator 3-in-1" },
  { $set: { prix: 49.99 } }
);

/*3*/
db.examnosql.updateOne(
  { nom: "Faucon Millenium", annee_sortie: 2019 },
  { $push: { evaluations: { utilisateur: "Frank", note: 4 } } }
);

/*4*/
db.examnosql.find({ theme: "Star Wars" }).sort({ annee_sortie: -1 });

/*5*/
db.examnosql.find({ prix: { $gt: 100 } }).sort({ nombre_de_pieces: -1 });

/*6*/
db.examnosql
  .find({}, { nom: 1, nombre_de_figures: 1 })
  .sort({ nombre_de_figures: -1 })
  .limit(3);

/*7*/
db.examnosql.find({ "evaluations.note": { $gte: 4 } });

/*8*/
db.examnosql.find({
  theme: { $in: ["Technic", "Creator"] },
  nombre_de_pieces: { $lt: 2000 },
});

/*9*/
db.examnosql.find({
  theme: "Harry Potter",
  annee_sortie: { $gte: 2000, $lte: 2010 },
});

/*10*/
db.examnosql.find({
  note_moyenne: { $gte: 4 },
  nombre_de_pieces: { $lt: 1000 },
});

/*11*/
db.examnosql.find({
  evaluations: {
    $not: {
      $elemMatch: { note: { $lt: 5 } },
    },
  },
});

/*12 je supprime "Eve" par ce que Bob il existe pas*/
db.examnosql.updateOne(
  { nom: "Faucon Millenium", annee_sortie: 2019 },
  { $pull: { evaluations: { utilisateur: "Eve" } } }
);

/*13*/
db.examnosql.deleteMany({ nombre_de_pieces: { $lt: 1000 } });

const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");
const jeux = require('./schema/jeux');

var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

Mongoose.connect("mongodb://localhost:27017/CVideoGame").then(() => console.log("Connexion à MongoDB réussie !"))
.catch(() => console.log("Connexion à MongoDB échouée !"));
app.get("/jeux", async (request, reponse) => {
    try{
        var result = await jeux.find();
        reponse.send(result);
    }catch(error){
        reponse.status(500).send(error);
    }
})

var init  = new jeux({
    id:"1",
    name: "Final Fantasie",
    description:"jeux combat",
    type:"arcade",
    console:"ps4",
    disponible:"oui"
})
init.save();
app.post("/jeuxp", (req, res) => {
    var myData = new jeux(req.body);
    console.log(myData);
    myData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to databasee" + err);
      });
  });
  app.get("/jeux/:type", async (req, reponse) => {
    try{
        var result = await jeux.find(req.params.type);
        reponse.send(result);
    }catch(error){
        reponse.status(500).send(error);
    }
})

app.listen(3001, () => {
    console.log("Listening at :3001...");
});

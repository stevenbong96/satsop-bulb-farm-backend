const router = require("express").Router();
const db = require("../models");


//Get request for PlantingInstruction text
router.get("/PlantingInstructionText", (req, res) => {
    db.PlantingInstruction.find()
    .then(text => res.json(text))
    .catch(err => {
        res.json(err);
      });
})

router.get("/PlantingInstructionText/:id", (req, res) => {
    db.PlantingInstruction.findOne({
        _id: req.params.id
    })
    .then(text => res.json(text))
    .catch(err => {
        res.json(err);
      });
})

//Post request for PlantingInstruction text
router.post("/PlantingInstructionText", ({ body }, res ) => {
    db.PlantingInstruction.create(body).then(text =>
        res.json(text)).catch(err => 
            {
                res.json(err);
            });
    })

//Put request for PlantingInstruction text
router.put("/PlantingInstructionText", ({ body }, res ) => {
    db.PlantingInstruction.update(body
        )
    .then(text => res.json(text))
    .catch(err => {
        res.json(err);
      });
})

router.put("/PlantingInstructionText/:id", ({ body }, res ) => {
     db.PlantingInstruction.findByIdAndUpdate(
         {_id: mongojs.Object(req.params.id)},
         {$set: body}
     )
     .then(text => res.json(text))
     .catch(err => {
        res.json(err);
      });
     
 })

module.exports = router;
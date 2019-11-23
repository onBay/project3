const express = require("express");
const router = express.Router();
const Vi = require("../model/Villas")

router.post("/create", (req, res) => {
  let vi = new Vi();
    console.log(req.body)
  vi.name = req.body.name;
//   vi.owner = req.body.owner;
//   vi.city = req.body.city;
//   vi.pricePerNight = req.body.pricePerNight;
//   vi.description = req.body.description;
//   vi.guests = req.body.guests;
//   vi.x=req.body.x;
//   vi.y=req.body.y;

  console.log(req.body.name);

  vi
    .save()
    // .then((m)=>{console.log(m)})
    
    // .then((m) => {
    //   res.json({ m });
    // })
    // .catch((e) => {
    //   res.json({ e });
    // });
}
);

router.get("/create", (req, res) => {
// res.render("villa/createVilla")
});

router.get("/", (req, res) => {
  Vi.find()
//   .where('pricePerNight').gt(100)
    .then((v) => {
        // console.log(v)
        res.json(v)
        // res.render("villa/viewVillas", { v });
    })
    .catch((err) => {
      res.json({ error: err });
    });
});


module.exports = router;

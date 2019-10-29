const express = require('express');

const router = express.Router();
const Creation = require('../models/Creation');

//GET ALL
router.get('/', async (req,res) =>{
    try {
        const creations = await Creation.find();
        res.send(creations);
    } catch (error) {
        res.json({error:error})
    }
    
});


//PERSIST
router.post('/', async (req,res) => {
 const creation = new Creation({
    title: req.body.title,
    description : req.body.description,
    image: req.body.image
 });

 try{
    const savedCreation = await creation.save();
    
    res.json(savedCreation);
 }catch(err){
    res.json({error : err});
 }

});



//GETBYID

router.get('/:creationId', async (req,res) =>{
    try {
        const creation = await Creation.findById(req.params.creationId);
        res.json(creation);
    } catch (err) {
        res.json({error : err});
    }

});
//Delete
router.delete('/:creationId', async (req,res) =>{
    try {
     const removedCreation = await Creation.remove({_id: req.params.creationId})
     res.json(removedCreation);
    } catch (err) {
        res.json({error : err});
    }

});


//UPDATE
router.patch('/:creationId', async (req,res) =>{
    try {
     const updatedCreation = await Creation.updateOne({_id: req.params.creationId}, { $set: {title: req.body.title}})
     res.json(updatedCreation);
    } catch (err) {
        res.json({error : err});
    }

});





module.exports = router;
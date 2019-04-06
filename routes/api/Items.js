const express=require('express');
const router=express.Router();

//Item Model
const Item =require('../../models/Items')
//@route GET /api/item
//@desc Get all itmes
//@access Public
router.get('/',(req,res)=>{
    Item.find()
        .sort({date:-1})
        .then(items=>res.json(items))
});
//@route POST /api/item
//@desc Get all itmes
//@access Public

router.post('/',(req,res)=>{
    const newItem=new Item({
        name:req.body.name
    });
newItem.save()
    .then(item => res.json(item))
});

//@route DELETE /api/item/:id
//@desc Delete an itme
//@access Public

router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id)
        .then(item =>item.remove().then(()=>res.json({success:true})))//to fetch id from url
        .catch(err=>res.status(404).json({success:false}))

})

module.exports= router;
const multer = require('multer')
const path = require('path')
const File = require('../models/File')
let storage = multer.diskStorage({
    destination :(req,file,cb)=>cb(null,'uploads/'),
    filename : (req,file,cb)=>{
        const uniqueName = `${Date.now()}-${Math.round(Math.random()*1E9)}${path.extname(file.originalname)}`
        cb(null,uniqueName)
    }
})

let upload = multer({
    storage,
    limits:{fileSize:1000000 * 100} // 10 mb size file
}).single('myfile')

const registerFiles = (req,res)=>{
    upload(req,res,async(err)=>{
        //Validate the request
        // console.log(req.file)
        if(!req.file){
                return res.json({error:"All valid fields are required"})

        }
        if(err){
            return res.status(500).send({err:err.message})
        }

        //Store file in database
        const {filename , path , size} = req.file
       try{
        const file = new File({
            fileName : filename,
            path,
            size

        })
        const result = await file.save()
        res.status(201).json(file)

       }catch(err){
            return res.status(500).json({err:err.message})
       }
    })

}

module .exports = registerFiles
const File = require('../models/File')
const getFiles={
    async singleFile(req,res){
      try{
        const file = await File.findById(req.params.id) 
        if(!file){
            return res.json({message:"No such file exists"})
        }
        // console.log(file)
        res.send(file)

      }catch(err){
        return res.json({err:'Something went wrong',err})
      }
    },

    async allFiles(req,res){
        try{
            const file = await File.find() 
            if(!file){
                return res.json({message:"No such file exists"})
            }
            console.log(file)
            res.send(file)
    
          }catch(err){
            return res.json({err:'Something went wrong',err})
          }

    }
}
module.exports = getFiles
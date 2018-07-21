var express =   require('express'),
    router  =   express.Router(),
    fileUpload = require('express-fileupload')


router.post('/image',(req,res)=>{
    if(!req.files){
        return res.status(400).send('No files were uploaded.');
    }
    console.log(req.files)
    
    let imageFile = req.files.image
    let imageName = req.files.image.name

    imageFile.mv(`../src/public/uploads/image/${imageName}`,(err)=>{
        if(err){
            return res.status(500).send(err)
        }
        res.send('File Uploaded')
    })
})




module.exports = router;
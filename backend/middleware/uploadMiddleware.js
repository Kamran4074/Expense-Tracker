const multer=require('multer');
const path=require("path");

// Condigure storage
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'upload/');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + "-" + Date.now() + ext);
    },
});

// File filter
const fileFilter=(req,file,cb)=>{
    const allowedTypes=['image/jpeg','image/png','image/jpg'];
    if(allowedTypes.includes(file.mimetype)){
        cb(null,true);
    }else{
        cb(new Error('only .jpeg, .jpg and .png formats are allowed'),false);
    }
};

const upload =multer({storage,fileFilter});
module.exports=upload;
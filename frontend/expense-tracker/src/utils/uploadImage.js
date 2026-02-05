import {API_PATHS} from './apiPaths';
import axiosInstance from './axiosInstance';

const uploadImage=async (imageFile)=>{
    const formData=new FormData();
    //Apend image file to form data
    formData.append('image',imageFile);

    try{
        const response =await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE,formData,{
            headers:{
                'Content-Type':'multipart/form-data',
            },
        });
        return response.data; 
    }
    catch(error){
        // Error will be handled by the calling component
        throw error;
    }
};

export default uploadImage;
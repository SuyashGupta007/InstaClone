import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../Api'
const CreatePost = () => {
    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState("");
    const navigate = useNavigate();

    const submit = async() => {
        try{
           const formData = new FormData();
        formData.append("image", image);
        formData.append("caption", caption);
        await API.post("/posts/create-post", formData);
        navigate("/");
        }catch(err){
            console.error(err.message);
        }
        

    }

  return (
    <div className='max-w-md mx-auto mt-6 space-y-3'>
     <h2 className='text-xl font-bold'>Create Post</h2>
     
     <input 
     type='file' 
     onChange={e=> setImage(e.target.files[0])}
     
     />
     
     <input 
     type="text"  
     placeholder='Write a caption....'
     onChange={e => setCaption(e.target.value)}
     />
     <button 
     className='bg-blue-500 text-white w-full py-2 rounded'
      onClick={submit}
     >Share</button>
    </div>
  )
}

export default CreatePost
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../Api'

const CreatePost = () => {
  // State for storing selected image
  const [image, setImage] = useState(null);

  // State for storing caption text
  const [caption, setCaption] = useState("");

  // Hook used for page navigation
  const navigate = useNavigate();

  // Function to handle post submission
  const submit = async () => {
    try {
      // Creating FormData object to send image + caption
      const formData = new FormData();

      // Appending image file
      formData.append("image", image);

      // Appending caption text
      formData.append("caption", caption);

      // Sending POST request to backend API
      await API.post("/posts/create-post", formData);

      // Redirect user to homepage after successful post
      navigate("/");

    } catch (err) {
      // Error handling
      console.error(err.message);
    }
  }

  return (
    <div className='max-w-md mx-auto mt-6 space-y-3'>

      {/* Heading */}
      <h2 className='text-xl font-bold'>Create Post</h2>

      {/* Image Upload Input */}
      <input
        type='file'
        onChange={e => setImage(e.target.files[0])}
      />

      {/* Caption Input */}
      <input
        type="text"
        placeholder='Write a caption....'
        className='border p-2 w-full rounded'
        onChange={e => setCaption(e.target.value)}
      />

      {/* Submit Button */}
      <button
        className='bg-blue-500 text-white w-full py-2 rounded'
        onClick={submit}
      >
        Share
      </button>

    </div>
  )
}

export default CreatePost
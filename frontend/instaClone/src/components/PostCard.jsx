import React from 'react'

const PostCard = ({post}) => {
  return (
    <div className='border rounded-lg mb-6 bg-white'>
        <img src={post.image} className='w-full object-cover'/>
        <div className='p-3'>
            <p className='font-semibold'>{post.caption}</p>
        </div>
    </div>
  )
}

export default PostCard
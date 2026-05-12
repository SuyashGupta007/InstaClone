import React from 'react'

// PostCard component receives single post as props
const PostCard = ({ post }) => {

  return (

    // Main Card Container
    <div className='border rounded-lg mb-6 bg-white'>

      {/* Post Image */}
      <img
        src={post.image}
        className='w-full object-cover'
        alt='post'
      />

      {/* Post Details Section */}
      <div className='p-3'>

        {/* Post Caption */}
        <p className='font-semibold'>
          {post.caption}
        </p>

      </div>

    </div>
  )
}

export default PostCard
import React, { useState } from 'react'

const CreatePost = ({addPost}) => {
    const [user, setUser] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost({user,content})
        setUser('')
        setContent('')
    }

  return (
    <>
    <div>Create Post</div>
    <form action="">
        <input type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder='user' className='w-full p-2 border rounded bg-custom-blue' required/>
        <textarea name="" id="" cols="30" rows="10" value={content} onChange={(e) => setContent(e.target.value)} required className='w-full p-2 border rounded bg-custom-blue' placeholder='content'  ></textarea>
        <button type="submit" className=' bg-custom-blue text-custom-pink p-2 rounded'>Post</button>
    </form>
    </>
  )
}

export default CreatePost
import React, { useEffect, useState } from 'react'
import Comment from './comment'
import axiosInstance from '../api/axios'
import { MdComment } from 'react-icons/md'
import errorFunction from '../helpers/errorHandling'

function Comments({ token }) {

    const [comments, setComments] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        axiosInstance.get('/fetchComments', {
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then(res => {
            setComments(res?.data?.comments)
        }).catch(err => {
            errorFunction(err)
        })
    }, [refresh])

    return (
        <div>
             <div className='flex gap-1'><MdComment/><h4 className='text-black font-semibold mb-4'>Discussions({comments.length})</h4></div>
            {comments?.map(comment => {
                <Comment comment={comment} />
            })}
        </div>
    )
}

export default Comments
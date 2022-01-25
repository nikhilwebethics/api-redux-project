import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import{getPosts} from ".postSlice/redux/features/postSlice";

function Posts(){

const {posts, loading} = useSelector ((state)=> state.post);

const dispatch = useDispatch();

useEffect(()=> {
    dispatch(getPosts());
}, [])

return(

    < div class="md:container md:mx-auto">

      <h1 class="text-4xl ...">All Blogs</h1><br/>

      {posts.map((item) => (

        <>
        <h3 className="text-2xl font-bold leading-7 text-blue-900 ">{item.title.rendered}</h3>
        <p>{item.date}</p>
        <p>Category : {item.categories}</p> 
        <p>{item.uagb_excerpt}</p><br/>
        </>

      ))}
    <button  type="button" className="load-more bg-red-700 p-2">Load more</button>
    </div>

);
}
export default Posts;
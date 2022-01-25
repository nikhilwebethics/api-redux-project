import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import{getPosts} from "./redux/features/postSlice";
import Header from './Components/Header';


function App() {

  const {posts, loading} = useSelector ((state)=> state.post);

  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getPosts());
  }, [])

  return (
  <>
   <Header/>
    < div class="md:container md:mx-auto">

      <h1 class="text-4xl ...">All Blogs</h1><br/>

      {posts.map((item , index) => (
        <>
        <h3 className="text-2xl font-bold leading-7 text-blue-900 ">{item.title.rendered}</h3>
        <p>{item.date}</p>
        <p>Category : {item.categories}</p> 
        <p>{item.uagb_excerpt}</p><br/>
        </>
      ))}
      <button  type="button" className="load-more bg-red-700 p-2">Load more</button>
    </div>
  </>
  );
}

export default App;

import React, {useEffect, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import{getPosts} from "./redux/features/postSlice";
import Header from './Components/Header';
import Searchbar from './Components/Searchbar';


function App() {

  const {posts, loading} = useSelector ((state)=> state.post);
  const[limit,setLimit]=useState(4);

  const LoadMore = () =>{
    setLimit(limit+2)
      if(limit==10){
        var element = document.getElementById("myDIV");
        element.remove("mystyle");
      }
    }

  const dispatch = useDispatch();
    useEffect(()=> {
     dispatch(getPosts());
  }, [])

  return (
  <>
  
   <Header/>
  
    < div class="md:container md:mx-auto">
    <Searchbar/>
      <h1 class="text-4xl ...">All Blogs</h1><br/>

      {posts.slice(0,`${limit}`).map((item , index) => (
        <>
        <h3 className="text-2xl font-bold leading-7 text-blue-900 ">{item.title.rendered}</h3>
        <p>{item.date}</p>
        <p>Category : {item.categories}</p> 
        <p>{item.uagb_excerpt}</p><br/>
        </>
      ))}
      <button id="myDIV" onClick={LoadMore} type="button" className="load-more bg-red-700 p-2">Load more</button>
    </div>
  </>
  );
}

export default App;

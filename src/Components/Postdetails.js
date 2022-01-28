import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Header from './Header';

function Postdetails(){

    const [post, setPost] = useState(null);
    const { id,setId } = useParams();
    
    useEffect(() => {
        getData();
    
          async function getData() {
          const response = await fetch(`https://renemorozowich.com/wp-json/wp/v2/posts/${id}`);
          const data = await response.json();
      
          setPost(data) ;
        }
      }, []); 
    

return(
<>
<Header/>

    <div className="md:container md:mx-auto pt-10">
        {post && (
          <div className="posts">
                <h3 className="text-4xl font-bold leading-7 text-red-900 ">{post.title.rendered}:</h3> <br/>
                <img src={post.uagb_featured_image_src.medium[0]} alt="icons" /><br/>
                <div className='authordetail'>
                    <h1 className='text-2xl'>Author Details:</h1><br/>
                    <h2 className='font-bold'>{post.uagb_author_info.display_name}:</h2>
                    <p>~ {post.uagb_excerpt}</p>
                </div>
 
          </div>
        )}

    </div>
</>
    );
}
export default Postdetails;
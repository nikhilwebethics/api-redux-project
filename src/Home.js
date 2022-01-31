import Header from "./Components/Header";
import Posts from "./Components/Posts";


function Home(){
    return(
    <>
        <Header/>
        <div className="md:container md:mx-auto pt-10">
        
            <Posts/>
        </div>
    </>
    );
}
export default Home;
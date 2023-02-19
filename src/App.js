import "./styles.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Data from "./components/Data";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 style={{textAlign:"center",margin:"20px",color:"cornflowerblue",fontWeight:"bold"}}>Our Projects</h1>
      {Data.map((value)=>{
        return(
        <Content Img={value.Img} name={value.name}/>
      )})}
    </div>
  );
}

import './content.css';
const Content = (props)=>{
  return(
    <>
    <div className="outer">
      <div className="inner">
        <img src={props.Img} alt="Not Found" style={{width:"300px",height:"180px"}}/>
        <h2>{props.name}</h2>
      </div>
    </div>
    </>
  )
}
export default Content;
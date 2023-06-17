import React ,{useState} from 'react'
  
export const Textform =(prop)=>{
const change =()=>{
console.log("change");
let newtext = text.toUpperCase();
setText(newtext)
}
const changeLo =()=>{
  console.log("change");
  let newtext = text.toLowerCase();
  setText(newtext)
  }
const changed =(event)=>{
console.log("changed");
setText(event.target.value)
}


const [text , setText] = useState("the value is here");
return (
  <>

  <div className="container">

  <h4>{prop.heading}</h4>
  <div className="mb-3">
 
  <textarea className="form-control" value={text} id="myBox " onChange={changed} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={change}>Change Text to Upper-Case</button>
<button className="btn btn-primary mx-1" onClick={changeLo}>Change Text to Lower-Case</button>
  </div>
  <div className="container my-3">
    <h3>Your Text summary</h3>
    <p> {text.split(" ").length} words and {text.length} charactor</p>
  </div>

  </>
  )
}

export default Textform

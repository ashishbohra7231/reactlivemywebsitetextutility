import React , {useState } from 'react'

export default
 function Textform1(props) {
function handleUpClick() {
  console.log("uppercase clicked");
  let txt1 = text.toUpperCase() ;
    
  setText(txt1);
  
}

function tocap () {
  let arr = text.split(" ");
  for( let i = 0 ; i<arr.length ; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const txt2 = arr.join(" ")
  setText(txt2);
}
 
function tolower () {
 let txt3 = text.toLowerCase();
 setText(txt3);
}
function clearbox(){
  let txt4 = "";
  setText(txt4);
}

function otc(event) {
  setText(event.target.value);
  
}
 function rev () {
  let txt5 = text ;
 
  let sp = txt5.split("");
  let rv = sp.reverse();
  let arr3 = rv.join(""); 
  // let txt6 =txt5.split("").reverse().join("");
  setText(arr3);
 }
  const [text ,setText] = useState('Enter Text here');
  return (
    
    <>
  <div className='mt-3 container'>
  <h5 className='text-DARK text-uppercase    d-inline border-bottom-0 ' >{props.heading}</h5>
  <textarea className="form-control  border-dark   " value={text}   onChange={otc}  id="exampleFormControlTextarea1" rows="8"></textarea>
  
  <div className=" container btn-group   d-flex justify-content-center  pt-4 " role="group" aria-label="Basic example">
  <button type="  " className="btn   btn-lg  btn-info  text-uppercase " onClick={handleUpClick}>uppercase</button>
  <button type="  " className="btn   btn-lg btn-info  text-capitalize" onClick={tocap}>capatalize </button>
  <button type="   " className="btn    btn-lg btn-info  text-lowercase" onClick={tolower}>lower case</button>
  <button type="   " className="btn  btn-lg btn-info  text-lowercase" onClick={clearbox}>CLEAR TEXT</button>
  <button type="   " className="btn  btn-lg  btn-info text-lowercase" onClick={rev}>reverse</button>
   
 
  </div>

 <div  className=' text-dark   container' >
  <br/>
  <div className='container border  ' border border-info  >
  <h2  >Your text summary</h2>
  <h5> Text has {text.length} characters </h5>
  <h5> Text has {text.split(" ").length-1 } words</h5>
  <h5> Text will take  {text.split(" ").length*0.008} minutes to read</h5>

 </div>
  </div>
  
  
 </div>
   </>
  )
}

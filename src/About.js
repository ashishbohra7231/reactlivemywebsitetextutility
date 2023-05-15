import React, { useState } from 'react'
 
export default function About() {
   const [btntxt ,setbtntext] = useState('Enable dark mode')
  const [mystyle , setstyle] = useState ({
    color: 'black' ,
    background : 'white ',
  })
  
const togglestyle =()=> {
 
    if(mystyle.color==='white'){
      setstyle({
      
        color: 'black' ,
        background : 'white ',
      
      })
      setbtntext('enable darkmode')
    } else {
      setstyle({
        background : 'black' ,
        color : 'white',
       
      })
       setbtntext('enable lightmode')
    }
  }

  return (
  <>
 <div className='container ' style={mystyle}>
 <nav className="accordion arrows" style={mystyle}>
    <header className="box" style={mystyle}>
      <label for="acc-close" className="box-title">ABOUT US</label>
    </header>
    <input type="radio" name="accordion" id="cb1" />
    <section className="box" style={mystyle}>
      <label className="box-title" for="cb1"> About Developer</label>
      <label className="box-close" for="acc-close"></label>
      <div className="box-content" style={mystyle}>Ashish bohra , you can contact me <br/> at ashishbohra1208@gmail.com <br/> contact No. 8947095378</div>
    </section>
    <input type="radio" name="accordion" id="cb2" />
    <section className="box" style={mystyle}>
      <label className="box-title" for="cb2">About APP</label>
      <label className="box-close" for="acc-close"></label>
      <div className="box-content" style={mystyle}>This is a text utility app for example to convert Text to upper case lower case , reverse text etc ..</div>
    </section>
    <input type="radio" name="accordion" id="cb3" />
    <section className="box" style={mystyle}>
      <label className="box-title" for="cb3">Hire me</label>
      <label className="box-close" for="acc-close"></label>
      <div className="box-content" style={mystyle}>I am available for web developer vacancy</div>
    </section>

    <input type="radio" name="accordion" id="acc-close" />
  </nav>
  <div className='container'>

  <button className=' btn btn-primary text-uppercase' onClick={ togglestyle}> {btntxt}</button>
  </div>
 
 </div>

  </>
  )
}

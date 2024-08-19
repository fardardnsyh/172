// import React , {useState} from 'react'

export default function About(props) {

  const mystyle = {
    color : props.mode==='dark'?'light':'dark',
    backgroundColor : props.mode ==='dark'?'dark':'light'
  }
    // const [mystyle , setMyStyle] = useState({
    //     color: 'white',
    //     backgroundColor:'black'

    // }) 

    // const [buttontext , setbuttontext] = useState("enable dark mode")

    // const tooglemode=()=>{
    //     if(mystyle.color === 'white'){
    //         setMyStyle({
    //             color: 'black',
    //     backgroundColor:'white'
    //         })
    //         setbuttontext('enable dark mode')
            
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'white',
    //     backgroundColor:'black'
    //         })
    //         setbuttontext('enable light mode')
    //     }
    // }
    
  return (
    <div className='container' style={mystyle}>
        <h2 className='my-02'>About Us</h2>
        <div className="accordion" id="accordionExample" style={mystyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        Textutils gives you a way to analyze your text quicly and efficiently. be it word count , character count or
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle} >
        Textutils is a free character counter tool that provides instant characterr count 
          & word count statistics for a given text . Textutils report the number of word and character .  Thus it is suitable for writing text with word/ chaacter limit
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={mystyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        This word counter software works in any web browser such as chrome,Firefox,Internet Exploreer , Safari ,Opera.It suits to count character in facebook , blog , books , excel document , pdf document , essays, etc
      </div>
    </div>
  </div>
</div>

{/* <button type="button"  className="btn btn-primary"  MY = '02' onClick={tooglemode}>{buttontext}</button> */}
      
    </div>

  )
}

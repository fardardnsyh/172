import React , {useState}from 'react'



export default function Textfrom(props) {
    const [text , setText] = useState('') 
    const handleupclick=()=>{
        let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("converted to upper case","success")
    }

    const handlelowcase=()=>{
        let text1 = text.toLowerCase();
        setText(text1)
        props.showAlert("converted to lower case","success")
    }
    const handleearsecase=()=>{
      let text2 = '';
      setText(text2)
      props.showAlert("text erased ","success")
    }
    const handlecopy = () =>{
      // var text = document.getElementById('mybox')
      // text.select()
      // document.getSelection().removeAllRanges()
      navigator.clipboard.writeText(text)
      props.showAlert("text is copied","success")
      
    }

    const handleremovespace=()=>{
      let text5 = text.split(/[ ]+/)
      setText(text5.join(" "))
      props.showAlert("text is removed space","success")
    }

    const handleonchange=(event)=>{
        console.log('handle on change')
        setText(event.target.value)
    }
    
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
        <form>
  
  <div className="form-group">
    <label htmlFor="mybox" style={{fontWeight: 'bold', fontSize: 30}}>{props.heading}</label>
    <textarea className="form-control" value = {text} onChange={handleonchange}id="mybox" style={{ backgroundColor: props.mode === 'dark'?'grey':'light' , color: props.mode === 'dark'?'white':'black'}} rows="8"></textarea>
  </div>

</form>
<button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleupclick} > click for upper case</button>
<button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlelowcase}>click to lower case</button>
<button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleearsecase}>click to erase</button>
<button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleremovespace}>click to Remove extra space</button>
<button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlecopy}>click to Copy text</button>

      
    </div>
    <div className="container"  style={{color: props.mode === 'dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>There are {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>The total time take to read = {0.008*text.split("\n").filter((element)=>{return element.length!==0}).length}minutes</p>
    </div>
    </>
  )
}

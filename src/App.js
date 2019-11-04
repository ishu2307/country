import React from 'react'



const App = () => {
    const [input1,setInput1] = React.useState("a");
    const [input2,setInput2] = React.useState("b");
    const [input3,setInput3] = React.useState("c");
    const [numerator,setNumerator] = React.useState("");
    const [denominator,setDenominator] = React.useState("");
    const [root1,setRoot1] = React.useState("");
    const [root2,setRoot2] = React.useState("");
    const getInput1=(e)=>{
        setInput1(e.target.value)
    }
    const getInput2=(e1)=>{
        setInput2(e1.target.value)
    }
    const getInput3=(e2)=>{
        setInput3(e2.target.value)
    } 
    const getVal=(input1,input2,input3)=>{
        setNumerator((Math.abs(input2*input2-(4*input1*input3)))**(1/2));
        setDenominator(2*input1)
        if(numerator>=0)
        {
           setRoot1(parseInt(-input2+numerator)/denominator);
           setRoot2(parseInt(-input2-numerator)/denominator);
           console.log(root1,root2);
        }
        else if(numerator===0)
        {
            setRoot1(parseInt(-input2/denominator));
            setRoot2(parseInt(root1));
            console.log(root1,root2);
        }
        else
        {
            setRoot1(parseInt(-input2/denominator));
            setRoot2(parseInt(numerator/denominator));
            console.log(root1,root2);
        }
    }
    
    return(
        <div>
          <p><b>Quadratic Equation ax2+bx+c=0</b></p>
            {"Enter value of a"}&nbsp;<input type="text" placeholder="a" onChange={getInput1}></input><br></br><br></br>
            {"Enter value of b"}&nbsp;<input type="text" placeholder="b" onChange={getInput2}></input><br></br><br></br>
            {"Enter value of c"}&nbsp;<input type="text" placeholder="c" onChange={getInput3}></input><br></br><br></br>
            <button onClick={()=>{getVal(input1,input2,input3);}}>submit</button><br></br><br></br><br></br>
            
            <span><b>Numerator is:&nbsp;</b> {numerator}</span><br></br><br></br>
            <span><b>Denominator is:&nbsp;</b> {denominator}</span><br></br><br></br>
            <span ><b>Expression is:&nbsp;{input1}x2+{input2}x+{input3}=0</b></span><br></br><br></br>
            <span><b>Root1=>&nbsp;{root1}</b></span><br></br><br></br>
            <span><b>Root2=>&nbsp;{root2}</b></span>
        </div>
    )
}
export default App;
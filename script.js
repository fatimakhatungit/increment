
// console.log(React);
// console.log(ReactDOM);
const domContainer = document.querySelector("#root");
const Increment = () => {
    const [counter, setCounter] = React.useState(0);

return(
<div>
    <h1 id="display">{counter}</h1>
    <div> 
        <button id="button" onClick={ () => setCounter(counter + 1)}>Increment</button>   
    </div>
</div>
);    
};


ReactDOM.render(
<div className="container">
    <div className="item">
    <Increment/>
    </div>
    <div className="item">
    <Increment/>
    </div>
    <div className="item">
    <Increment/>
    </div>
    <div className="item">
    <Increment/>
    </div>
    <div className="item">
    <Increment/>
    </div>
</div>,
domContainer
    );

// let number = 0;

// const display = document.querySelector("#display");
// const button = document.querySelector("#button");


// button.addEventListener("click", () => {
//     number++;
//     display.textContent = number; 

// });

// const myElement =React.createElement("div", null, [
//     React.createElement("p", null, "Hello World"),
//     React.createElement("p", null, "Hello World"), 
//     React.createElement("p", null, "Hello World"), 

// ]);
// ReactDOM.render(myElement, domContainer);

// let p = document.createElement("p"); 
// p.innerHTML = "Hello world";
// domContainer.appendChild(p);


//javascript
// let number1 = 0;
// let number2 = 0;

// const button1 = document.querySelector("#button1");
// const display1 = document.querySelector("#display1");
// const button2 = document.querySelector("#button2");
// const display2 = document.querySelector("#display2");

// button1.addEventListener("click", () => {
//     number1++;
//     display1.textContent = number1;

// });
// button2.addEventListener("click", () => {
//     number2++;
//     display2.textContent = number2;

// });

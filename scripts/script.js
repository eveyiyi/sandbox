/****************** YOUR NAME: 

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

//default values would be captured from the tags
let modelName=document.getElementById("model-text").innerText;
let duration=document.getElementById("calculated-cost").innerText;

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE
// To calulate the costs
function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    let newTotalCost = 0;
    if (modelName === "Model XYZ") {
        newTotalCost = duration * 100;
    } else if (modelName === "Model CPRG") {
        newTotalCost = duration * 213;
    }
    costLabel.innerHTML = newTotalCost;//'$${newTotalCost.toFixed(2)}';
}

/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE

//to change the Model
let modelButton = document.getElementById("model-button");
function changeModel() {
    let modelText = document.getElementById("model-text");

    if (modelName === "Model XYZ") {
        modelName = "Model CPRG";
        modelText.innerHTML = "Model CPRG";
    } else if (modelName === "Model CPRG") {
        modelName = "Model XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    recalculate();
}




/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE
let durationButton = document.getElementById("duration-button");

function changeDuration() {
    let durationText = document.getElementById("duration-text");
    let newDuration = prompt("Please enter the new duration in days: ");
    if (newDuration !== null && newDuration !== "") {
        duration = parseInt(newDuration);
        durationText.innerHTML = duration;
        recalculate();
    }
}



//invoke functions

modelButton.addEventListener('click', changeModel);//事件监听是一个js用以跟html和浏览器交互的一个api
                                                    //addEventListenert函数take一个主体（标签）和两个参数来运行（事件，响应函数）
                                                    //事件监听允许一个主体（modelButton）来监听一个事件(click)，从而触发一个行为/函数(changeModel)
durationButton.addEventListener('click', changeDuration);


function doIt()
{
    // Variables for HTML element DOM references.
    var num1Ref, num2Ref, num3Ref, answerRef, oddevenRef; 
    
    // Variables declarations.
    var num1, num2, num3, answer, oddeven; 
    
    // Get references to DOM elements.
    num1Ref = document.getElementById("num1");
    num2Ref = document.getElementById("num2");
    num3Ref = document.getElementById("num3");
    answerRef = document.getElementById("answer");
    oddevenRef = document.getElementById("oddeven");

    // Convert strings to numbers, e.g., "21" to 21.
    num1 = Number(num1Ref.value);
    num2 = Number(num2Ref.value);
    num3 = Number(num3Ref.value);
    
    // Perform addition operation then assignment operation
    answer = num1 + num2 + num3; 

    // Update "answer" label DOM to show result using "innerText" property. innerText is a property of label tag.
    answerRef.innerText = answer;
    
    oddevenRef.innerText = oddeven;

    if (answer >= 0)
    {
        // Value of answer is positive.
        // Set the class of the answer label to "positive".
        answerRef.className = "positive";
    }
    else
    {
        // Value of answer is not positive, i.e., negative.
        // Set the class of the answer label to "negative".
        answerRef.className = "negative";
    }

    if(answer%2 == 0)
    {
        oddevenRef.innerText = "(even)";
        oddevenRef.className = "even";
    }
    else
    {
        oddevenRef.innerText = "(odd)";
        oddevenRef.className = "odd";
    }
}
    
function subit()
{
    // Variables for HTML element DOM references.
    var number1Ref, number2Ref, number3Ref, answer2Ref, oddeven2Ref; 
    
    // Variables declarations.
    var number1, number2, number3, answer2, oddeven2; 
    
    // Get references to DOM elements.
    number1Ref = document.getElementById("number1");
    number2Ref = document.getElementById("number2");
    number3Ref = document.getElementById("number3");
    answer2Ref = document.getElementById("answer2");
    oddeven2Ref = document.getElementById("oddeven2");

    // Convert strings to numbers, e.g., "21" to 21.
    number1 = Number(number1Ref.value);
    number2 = Number(number2Ref.value);
    number3 = Number(number3Ref.value);
    
    // Perform addition operation then assignment operation
    answer2 = number1 - number2 - number3; 

    // Update "answer" label DOM to show result using "innerText" property. innerText is a property of label tag.
    answer2Ref.innerText = answer2;
    
    oddeven2Ref.innerText = oddeven2;

    if (answer2 >= 0)
    {
        // Value of answer is positive.
        // Set the class of the answer label to "positive".
        answer2Ref.className = "positive";
    }
    else
    {
        // Value of answer is not positive, i.e., negative.
        // Set the class of the answer label to "negative".
        answer2Ref.className = "negative";
    }

    if(answer2%2 == 0)
    {
        oddeven2Ref.innerText = "(even)";
        oddeven2Ref.className = "even";
    }
    else
    {
        oddeven2Ref.innerText = "(odd)";
        oddeven2Ref.className = "odd";
    }
} 

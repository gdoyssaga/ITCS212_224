function doItadd() {
  // Variables for HTML element DOM references.
  var num1Ref, num2Ref, num3Ref, answerRef;

  // Variables declarations.
  var num1, num2, num3, answer;

  // Get references to DOM elements.
  num1Ref = document.getElementById("num1");
  num2Ref = document.getElementById("num2");
  num3Ref = document.getElementById("num3");
  answerRef = document.getElementById("answer");

  // Convert strings to numbers, e.g., "21" to 21.
  num1 = Number(num1Ref.value);
  num2 = Number(num2Ref.value);
  num3 = Number(num3Ref.value);

  // Perform addition operation then assignment operation
  answer = num1 + num2 + num3;

  // Update "answer" label DOM to show result using "innerText" property. innerText is a property of label tag.
  answerRef.innerText = answer;

  if (answer >= 0) {
    // Value of answer is positive.
    if (answer % 2 == 0) {
      answerRef.className = "positive even";
    } else {
      answerRef.className = "positive odd";
    }
    // Set the class of the answer label to "positive".
  } else {
    if (answer % 2 == 0) {
      answerRef.className = "negative even";
    } else {
      answerRef.className = "negative odd";
    }
    // Value of answer is not positive, i.e., negative.
    // Set the class of the answer label to "negative".
  }
}

function doitsub() {
  // Variables for HTML element DOM references.
  var num1Ref, num2Ref, num3Ref, ansRef;

  // Variables declarations.
  var num1, num2, num3, ans;

  // Get references to DOM elements.
  num1Ref = document.getElementById("num4");
  num2Ref = document.getElementById("num5");
  num3Ref = document.getElementById("num6");
  ansRef = document.getElementById("ans");

  // Convert strings to numbers, e.g., "21" to 21.
  num1 = Number(num1Ref.value);
  num2 = Number(num2Ref.value);
  num3 = Number(num3Ref.value);

  // Perform addition operation then assignment operation
  ans = num1 - num2 - num3;

  // Update "answer" label DOM to show result using "innerText" property. innerText is a property of label tag.
  ansRef.innerText = ans;

  if (ans >= 0) {
    // Value of answer is positive.
    if (ans % 2 == 0) {
      ansRef.innerText = "positive even";
    } else {
      ansRef.className = "positive odd";
    }
    // Set the class of the answer label to "positive".
  } else {
    if (ans % 2 == 0) {
      ansRef.className = "negative even";
    } else {
      ansRef.className = "negative odd";
    }
    // Value of answer is not positive, i.e., negative.
    // Set the class of the answer label to "negative".
  }
}

function firstWord(s) {
  // your code here
	if (!inputString || !inputString.includes(' ')) {
    return inputString;  // Return the entire string
  }

  // Split the string at the first space and return the first word
  return inputString.split(' ')[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));


function firstWord(s) {
  // your code here
	const word = s.split(" ")[0];
	return word;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

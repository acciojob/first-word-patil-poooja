function firstWord(s) {
  // your code here
	s=s.trim();
	if (!s || !s.includes(' ')) {
    return s;  // Return the entire string
  }

	// Split the string at the first space and return the first word
  return s.split(' ')[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));


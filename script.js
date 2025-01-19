function firstWord(s) {
  // your code here
	if(s.indexOf(" ")===-1){
		return s;
	};
	else{
		const word = s.split(" ")[0];
		return word;
	};
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));


const characters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"~",
	"`",
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	"&",
	"*",
	"(",
	")",
	"_",
	"-",
	"+",
	"=",
	"{",
	"[",
	"}",
	"]",
	",",
	"|",
	":",
	";",
	"<",
	">",
	".",
	"?",
	"/",
];
const pass1El = document.getElementById("pass1");
const pass2El = document.getElementById("pass2");
const generateEl = document.getElementById("generate");
const resetEl = document.getElementById("reset");
const sliderEl = document.getElementById("slider");

function sliderVal() {
	let val = sliderEl.value;
	document.getElementById("length").textContent = val;
	return val;
}

function generate() {
	let password = "";
	let passwordLength = sliderVal();
	for (let i = 0; i < passwordLength; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		password += characters[randomIndex];
	}
	return password;
}

generateEl.addEventListener("click", function () {
	pass1El.textContent = generate();
	pass2El.textContent = generate();
});

resetEl.addEventListener("click", function reset() {
	pass1El.textContent = "Password 1";
	pass2El.textContent = "Password 2";
});

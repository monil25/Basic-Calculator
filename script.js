const btns = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".btn-equal");
const clearBtn = document.querySelector(".btn-clear");
const delbtn = document.querySelector(".btn-delete");
//const delbtn = document.querySelector('.btn-delete');
const operands = ["*", "+", "/", "-"];
const exceptThis = ["/-", "*-"];
for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		let number = btns[i].getAttribute("data-num");
		let outputStr = screen.value;
		let len = outputStr.length;
		let lastChar = outputStr[len - 1];
		if (len > 0) {
			//EXAMPLE:-IF "*" CLICKED JUST AFTER "+", REMOVE "+" AND REPLACE WITH "*"
			//but not for 8*-5= -40, 8/-2=-4.
			let lastTwo = outputStr.charAt(len - 1) + number;
			if (
				operands.includes(lastChar) &&
				operands.includes(number) &&
				!exceptThis.includes(lastTwo)
			) {
				screen.value = outputStr.substring(0, len - 1) + number;
			} else {
				screen.value += number;
			}
		} else {
			screen.value += number;
		}
	});
}
/*here "innerHTML" cannot be used because

value refers to the value of an input element (or textearea)

<input value="hello world">

value would be "hello world" (or any value typed inside)

innerHTML refers to the contents inside an HTML element.

<div>
  <span class="hello">
	All tags and their children are include in innerHTML.
  </span>
  All this is part of innerHTML.
</div>

innerHTML of the div tag would be the string:

  '<span class="hello">
    All tags and their children are include in innerHTML.
  </span>
  All this is part of innerHTML.'

*/

equalBtn.addEventListener("click", function () {
	if (screen.value === "") alert("No expression was entered!");
	else {
		try {
			let value = eval(screen.value);
			screen.value = value;
		} catch (e) {
			if (e instanceof SyntaxError) alert("You entered a wrong expression!");
		}
	}
});
delbtn.addEventListener("click", function () {
	var len = screen.value.length;
	if (len > 0) screen.value = screen.value.substring(0, len - 1);
});
clearBtn.addEventListener("click", function () {
	screen.value = "";
});
let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");

let string = "";
let isPercent = false;

buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        let value = e.target.innerHTML;

        // 🔸 EQUAL BUTTON
        if (value === "=") {
            try {
                if (isPercent) {
                    let match = string.match(/(\d+)([+\-*/])(\d+)%/);

                    if (match) {
                        let num1 = parseFloat(match[1]);
                        let operator = match[2];
                        let num2 = parseFloat(match[3]);

                        // 🔥 percentage calculation
                        let percentValue = (num1 * num2) / 100;

                        let finalExpression = num1 + operator + percentValue;

                        string = eval(finalExpression).toString();
                    }
                } else {
                    string = eval(string).toString();
                }

                input.value = string;
                isPercent = false;

            } catch {
                input.value = "Error";
                string = "";
            }
        } 

        // 🔸 CLEAR ALL
        else if (value === "AC") {
            string = "";
            input.value = "";
            isPercent = false;
        } 

        // 🔸 DELETE
        else if (value === "DEL") {
            string = string.slice(0, -1);
            input.value = string;
        } 

        // 🔸 PERCENT BUTTON (NEW LOGIC)
        else if (value === "%") {
            isPercent = true;
            string += "%";
            input.value = string;
        }

        // 🔸 NORMAL BUTTONS
        else {
            string += value;
            input.value = string;
        }
    });
});
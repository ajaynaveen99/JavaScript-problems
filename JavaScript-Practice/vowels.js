function text(str) {
    let i;
    let count = 0;
    for (i = 0; i < str.length; i++) {

        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
            count = count + 1
        }

    } console.log(count)
}


console.log(text("helloworldgoodmarning"));
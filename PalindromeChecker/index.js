const userInput = document.getElementById("userInput");

function check(){
    const value = userInput.value;
    const reverse = reverseString(value);

    if(value == reverse){
        alert("Palindrome");
    }else{
        alert("Not a palindrome");
    }
    userInput.value = "";
}

function reverseString(str){
    return str.split("").reverse().join("");
}
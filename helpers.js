export const printView = function (divId = "") {
    if(divId == null) return;
    const modal = document.getElementById(divId)
    const cloned = modal.cloneNode(true)
    let section = document.getElementById("print")

    if (!section) {
        section  = document.createElement("div")
        section.id = "print"
        section.classList.add("w-100");
        document.body.appendChild(section)
    }

    section.innerHTML = "";
    section.appendChild(cloned);
    window.print();
}

String.prototype.insert = function(index, string) {
    if (index > 0) {
        return this.substring(0, index) + string + this.substr(index);
    }

    return string + this;
};

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}


export const numberConverter = function(number = 0.00, currency = null){

    if(number == null || number === 0)
        return "0";
    let numberString = "" + number;
    let isMinus = false;
    if(numberString[0] === "-")
    {
        numberString = numberString.substring(1);
        isMinus = true;
    }
    let isFloat = numberString.indexOf(".",-1);
    let beforeComma = "";
    if(isFloat !== -1)
        beforeComma = numberString.substring(0,numberString.indexOf(".",-1));
    else
        beforeComma = numberString;

    let decimalCounter = 1;
    let loopCounter = (beforeComma.length - 1);
    for (let i = loopCounter; i >= 0; i--) {
        if(i > 0)
            if(decimalCounter % 3 === 0)
                beforeComma = beforeComma.insert((i),".");

        ++decimalCounter;
    }

    if(isFloat !== -1){
        numberString = numberString.substring(numberString.indexOf(".",-1));
        numberString = beforeComma + numberString.substring(0,3);
        numberString = numberString.replaceAt(numberString.lastIndexOf("."),",");
    }
    else{
        numberString = beforeComma;
    }

    if(isMinus)
        numberString = "-" + numberString;

    return numberString + (currency ?  " " + currency : "") ;

}
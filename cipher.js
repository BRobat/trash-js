if (cipher("a") !== "11") {
    throw new Error('Check fail: Happy path');
};

if (encoder("no czesc!") !== "2425 1334152813!") {
    throw new Error('Check fail: Happy path');
};




function cipher(cha) {
    let array = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","W","X","Y","Z"];
    for (let i = 0; i < array.length; i++) {
        if (cha.toUpperCase() === array[i]){
            cha = 11 + i;
            cha = cha.toString();
            return cha;
        };
    };
    return cha;
};

function encoder(str){
    array = str.split("");
    array2 = [];

    for (let i = 0; i < array.length; i++) {
        array2.push(cipher(array[i]));
    };
    str = array2.join("");
    return str;
};

console.log(cipher("z"));

console.log(encoder("Ania fajna jest"));



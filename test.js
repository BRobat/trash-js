function rot(cha, num) {
    let array = ["A",
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
    "Z"];

    for (let i = 0; i < array.length; i++) {
        if (cha === array[i]) {
            if (i + num >= array.length) {
                cha = array[i + num - array.length];
                return cha;
            } else { 
                cha = array[i + num];
                return cha;
            };
        }; 
    };
    return cha;
};





function rot13(str) { // LBH QVQ VG!
    let array = str.split("")
    let array2 = []
    for (let i = 0; i < array.length; i++) {
        array2.push(rot(array[i],13));
    }
    
  
  
    str = array2.join("")
    return str;
  }
  
  // Change the inputs below to test
  console.log(rot13("SERR PBQR PNZC"))
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))
  console.log(rot("Z", 2));

function firstLast6(arr) {
    var six = "";
    var first = arr[0];
    var last = arr[arr.length-1];
    if(first == 6 || last == 6){
        six = true;
    }else{
        six = false;
    }
    return six;
}


function has23(arr) {
    var i = "";
    var first = arr[0];
    var second = arr[1];
    if(first == 3|| second == 3){
        i  = true;
    }else if(first == 2 || second == 2){
        i  = true;
    }else{
    i = false;
}
    return i;
}


function fix23(arr) {
    var i = "";
    for (i = 0; i < arr.length; i++){
        if ((arr[i] == 2) && (arr[i + 1] == 3)) {
            arr[i + 1] = 0;
        }
    }
    return arr;
}
function countYZ(arr) {
    var i = "";
    var count = 0
    var arr = arr + " "
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == "y" && arr[i + 1] == " ") {
            count += 1
        } else if (arr[i] == "z" && arr[i + 1] == " ") {
            count += 1
        } else if (arr[i] == "Y" && arr[i + 1] == " ") {
            count += 1
        } else if (arr[i] == "Z" && arr[i + 1] == " ") {
            count += 1
        }
    }
    return count;
}
function countYZ(arr) {
    var i = "";
    var count = 0
    var arr = arr + " "
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == "y" && arr[i + 1] == " ") {
            count += 1
        } else if (arr[i] == "z" && arr[i + 1] == " ") {
            count += 1
        } else if (arr[i] == "Y" && arr[i + 1] == " ") {
            count += 1
        } else if (arr[i] == "Z" && arr[i + 1] == " ") {
            count += 1
        }
    }
    return count;
}

function endOther (str1,str2) {
    var str1Lower = str1.toLowerCase();
    var str2Lower = str2.toLowerCase();
    var endOther = "";
    var biggerStr = "";
    var smallerStr = "";
    if (str1.length > str2.length) {
        biggerStr = str1Lower;
        smallerStr = str2Lower;
    } else {
        biggerStr = str2Lower;
        smallerStr = str1Lower;
    }
    var num2 = smallerStr.length;
    var num = biggerStr.indexOf(smallerStr);

    if (num == biggerStr.length - num2) {
        endOther = true;
    } else {
        endOther = false;
    }
    return endOther;

}

function starOut(str){
    var newWord = "";
    for (var i = 0; i < str.length; i++)    {
        if(str[i] !="*" && str[i+1] != "*" && str [i-1]!="*"){
            newWord += str[i];
        }
    }
    return newWord;
}

function getSandwich(str){
    var slice1 = str.indexOf("bread");
    var slice2 = str.lastIndexOf("bread");
    if(slice1 == -1 || slice1 == slice2){
      var filling = "";
    }else{
        var filling = str.substring(slice1+5,slice2);
    }
return filling;
}

function canBalance(arr){
    var firstSum = 0;
    var secondSum = 0;
    for (var i = 0; i < arr.length; i++){
        firstSum += arr[i];
        for (var y = i+1; y < arr.length; y++){
            secondSum += arr[y];
        }
    if(firstSum == secondSum){
            return true;
        }
        secondSum = 0;
    }
    return false;
}

function countClumps(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i - 1] && arr[i] != arr[i + 1]) {
            count += 1
        }
    }
return count;
}


function evenlySpaced(a,b,c){
    var spaced;
    var max = Math.max(a,b,c);
    var min = Math.min(a,b,c);
    var sum = a + b + c;
    var mid = sum - (min+max);

    if(mid - min == max - mid){
        return true;
    }
return false;
}





function tester() {
    document.getElementById("output").innerHTML += firstLast6([2,3]);
    document.getElementById("output").innerHTML += has23([4,6]);
    document.getElementById("output").innerHTML += fix23([1,2,3]);
    document.getElementById("output").innerHTML += countYZ([fez,day]);
    document.getElementById("output").innerHTML += endOther([abc,Hiabc]);
    document.getElementById("output").innerHTML += starOut([ab*cd]);
    document.getElementById("output").innerHTML += getSandwich([ab*cd]);
    document.getElementById("output").innerHTML += canBalance([1,2,1,3,1]);
    document.getElementById("output").innerHTML += countClumps([1,1,1,3,3]);
    document.getElementById("output").innerHTML += evenlySpaced([2,3,4]);
}

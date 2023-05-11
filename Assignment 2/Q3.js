function addNumbers(arr){
    var sum=0;
    for (let i = 0; i<arr.length;i++){
        sum=sum+arr[i];
    }
    
    return(sum);
}

function findMaxNumber(arr){
    var max = 0;
    for (let i = 0; i<arr.length;i++){
        if(arr[i]>max)
            max = arr[i];
    }
    
    return(max);
}

function addOnlyNumbers(arr){
    var sum=0;
    for (let i = 0; i<arr.length;i++){
        if (parseFloat(arr[i])>0)
            sum=sum+parseFloat(arr[i]);
        document.write(sum+"<br>");
    }
    
    return(sum);
}

function getDigits(str){
    return str.replace(/[^0-9]/g,"");
}

function reverseString(str){
    var reversed = "";
    for (let i = str.length-1;i>=0;i--){
        reversed = reversed.concat("",str.charAt(i));
    }
    return reversed;
}

function getCurrentDate(){
    return new Date();
}
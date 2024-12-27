// Q55. flip word  Toggle upcase to low case and cise versesa
// str = "AnIsH" 
// ans=""
// for (let i=0 ; i<str.length ; i++){
//     if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90 ){
//      ans = ans + String.fromCharCode(str.charCodeAt(i)+32)   

//     }
//     else {
//      ans = ans + String.fromCharCode(str.charCodeAt(i)-32)   

//     }
// }
// console.log(ans);



//StringMethods
// let s1 ="AnIsh"
// console.log("s1 : ",s1)
// console.log(s1.toUpperCase());
// console.log(s1.toLowerCase());
// console.log(s1.concat(" bhattacharya"));
// console.log(s1.startsWith("Abi"))
// console.log(s1.endsWith("nIsh"))
// console.log(s1.includes("a"))
// console.log(s1.includes("A"))
// console.log(s1.includes("An"))
// console.log(s1.includes("nI"))
// console.log(s1.includes("Ish"))
// console.log(s1.includes("An"))

// let s2 = " anish%is%in% bhopal% now "
// console.log(s2.split(""))
// console.log(s2.split(" "))
// console.log(s2.split("%"))  /// important check it just breask from % 


// console.log(s2.trim()) // removes preceeding and extra space form end
// console.log(s2.trimStart()) // removes preceeding  end
// console.log(s2.trimEnd())  // removes extra space form end



//Q56. count the valid words (sol in copy)
// let words = ["pay","attire", 'attend',"practise"]
// let pref = "at"
// let count = 0 
// for (let i = 0 ; i<words.length ; i++){
//     if(words[i].startsWith(pref)) count++
// }
// console.log(count);









//Q.57. split and change (sol in copy)
let sentence = "hello Bhai Kase h0 App log"
let words = sentence.split(" ")
// console.log(words);
for (let i = 0 ; i<words.length ; i++){
    console.log(words[i].charAt(0).toUpperCase()+words[i].substring(1));
    
}
        






// Q58.Count the Frequency of alphabets in the word 
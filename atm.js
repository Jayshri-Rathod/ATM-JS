// let rlsync=require('readline-sync');
// var number=Number(rlsync.question("enter number"));
// if (number%2==0){
//     console.log("even number")
// }else{
//     console.log("odd number")
// }

// let rlsync=require('readline-sync');
// var name=rlsync.question("enter you name");
// if (name=="jayshri"){
//     var surname=rlsync.question("enter your surname");
//     if (surname=="rathod"){
//         var age=rlsync.question("enter your age");
//         if (age=="34"){
//             console.log("your aaccount is ready")
//         }else{
//             console.log("sorry")
//         }
//     }else{
//         console.log("invalid")
//     }
// }else if (name=="divya"){
//     var surname=rlsync.question("enter your surname");
//     if (surname=="zha"){
//         var age=rlsync.question("enter your age");
//         if (age=="36"){
//             console.log("you are ready");
//         }else{
//             console.log("i am sorry");
//         }
//     }else{
//         console.log("i am not ready")
//     }
// }else{
//     console.log("invalid sorry")
// }

console.log("welcome to SBI bank");
let readlineSync = require("readline-sync");
var swap=readlineSync.question("please insert your card ");
if (swap=="insert"){
    console.log("remove your card");
    var language=readlineSync.question("please select language  " );
    if (language=="english"){
        var number=readlineSync.question("enter any number between 10 and 90 for eg.'25  ");
        var pin=readlineSync.question("please enter your pin ");
        if (pin=="1234"){
            console.log("pin is correct");
            var trans=readlineSync.question("please select the transction ");
            if (trans=="fast cast" || trans=="withdrawal" || trans=="balence inquiry" ){
                var account=readlineSync.question("please select account type" );
                if (account=="saving" || account=="current"){
                    console.log("cash available-Rs 100,Rs 500,Rs 2000  ");
                    var amount=Number(readlineSync.question("please enter amount "));
                    if (amount<=20000){
                        console.log("your transaction is being processed. please Wait ");
                    }else{
                        console.log("amount is more than 20000 ");
                    }
                } else{
                    console.log("invalid acount " );
                }
            }else{
                console.log("invalid transection" );
            }
        }else{
            console.log("ivalid pin ");
        }
    }else if (language=="hindi"){
        var number=readlineSync.question("10 ya 90 me se koe ek ank daliye ");
        var pin=readlineSync.question("krupaya aapka pin daliye");
        if (pin=="1234"){
            console.log("aapka pin sahi hai");
            var trans=readlineSync.question("krupaya len den ka prakar batahye");
            if (trans=="teji se nakdi" || trans=="nikasi" || trans=="balance puchtach"){
                var account=readlineSync.log("krupaya aapna khata prakar chuniye");
                if (account=="bachat" || account=="chalu khata"){
                    console.log("cash available-Rs100,200,500,2000");
                    amount=Number(readlineSync.question("krupaya pese daliye"));
                    if (amount<=20000){
                        console.log("aapka len den kriya suru hai thoda wait kare");
                    }else{
                        console.log(" pese 20000 se jyada hai");
                    }                     
                }else{
                    console.log("khata sahi nahi hai");
                }
            }else{
                console.log("len den sahi nahi hai");
            }
        }else{
            console.log("pin sahi nahi hai");
        }
    }else{
        console.log("invalid language");
    }
}else{
    console.log("try again");
}

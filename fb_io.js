function readListener() {
console.log("Setting up listener for me sage");
firebase.database().ref('/message').on('value', snapshot.val() );

}


firebase.database().ref('users/Dhruv').set({
    age: 67,
    feet: 2,
    hair
})
 firebase.database().ref('/game1').set(

    { users:{
            Dhruv: 99999,
            Jack: 10000,
            Micheal:"3.141",
            Sasha:0.5,
            Yug: 987654321,
        }
    }

 );

 firebase.database().ref('/game2').set(

{
    
        users:{
            Dhruv:13,
            Jack:14,
            Mikaela:7,
            Sasha:3,
            Yug:12,
        }
    }
 )


firebase.database().ref('/game1/users/Jenna/').set(123456789);

let user = "toby";
let score = "0";
firebase.database().ref('/game1/users/'+user).set(
score

);

function updateHighscoreTable() {
console.log("Updating")
firebase.database().ref('/game1/users').update({
Xavier: 67

})

}

for (i = 0; i <names.lenght;i++){
    let key = names[i];
    console.log("Score "+i+" is for "+ key +". "+highScore[key] + "points." )
}

highscoreTable = {
game1: {
users: {
Dhruv: 99999,
Jack: 10000,
Michael: "3.141",
Sasha: 0.5,
Yug: 987654321

},
game2: {
users: {
Dhruv: 13,
Jack: 14,
Mikaela: 7,
Sasha: 3,
Yug: 12,

}

}

}
}
firebase.database().ref('/').set(highscoreTable)
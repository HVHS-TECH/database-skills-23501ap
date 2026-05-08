/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/

function helloWorld(){
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: 'Kia ora te ao'
    }
  )
}

 function GoodBye(){
  console.log("GoodBye()")
  firebase.database().ref('/').set(
    {
      message: 'ka kite āno'
    }
  )
}

function readListener() {
console.log("Setting up listener for me sage");
firebase.database().ref('/message').on('value', snapshot.val() );

}

 firebase.database().ref('/').set(
{
    game1: {
     users:{
            Dhruv: 99999,
            Jack: 10000,
            Micheal:"3.141",
            Sasha:0.5,
            Yug: 987654321,
        }
    }
}
);


 firebase.database().ref('/').set(

{
    game2: {
        users:{
            Dhruv:13,
            Jack:14,
            Mikaela:7,
            Sasha:3,
            Yug:12,
        }
    }
}
 )


firebase.database().ref('/game1/users/Jenna').set(123456789)

let user = "toby";
let score = "0";
firebase.database().ref('/game1/users/'+user).set(
score

);

function Updatescore() {
console.log("Updating")
firebase.database().ref('/game1/users').update({
Xavier: 67
})
}

function Highscore(){
  console.log("Highscore")
  firebase.database().ref('/game1/users')
}



















function display(snapshot){
  var dbData = snapshot.val();
  if (dbData ==null)
    console.log(dbData)
}

function fb_readError(error){
  console.log("There was an error reading the message");
  console.error(error);
}

function fb_readlistener(){
console.log("Read Listener");
firebase.database().ref('/message').on('value',fb_logDatabaseRead)
}


function display(snapshot){
console.log("Running display(), the message is:" + snapshot.val())
HTML_OUTPUT.innerHTML = snapshot.val();
}
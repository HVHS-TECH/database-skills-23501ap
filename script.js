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

function simpleRead(){
console.log("Reading message");
firebase.database().ref('/').set('Read carefuly').once('value',display, fb-_readError);
console.log("Leaving simpleRead")

}


function display(snapshot){
console.log("Running display(), the message is:" + snapshot.val())
HTML_OUTPUT.innerHTML = snapshot.val();
}

function display(snapshot){
  var dbData = snapshot.val();
  if (dbData ==null)
    console.log("The message is:" + dbData)
}

function fb_readError(error){
  console.log("There was an error reading the message");
  console.error(error);
}
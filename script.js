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

function Read(){
console.log()

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
/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/
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
firebase.database().ref('/').child('message').once('value', displayRead);
console.log("Leaving simpleRead")
}

firebase.database().ref('/message').once('value',DO_THIS )
function DO_THIS(snapshot){console.log(snapshot.val());
}
function displayRead(snapshot){
    console.log("Running displayRead(), the message is:" + snapshot.val())
    HTML_OUTPUT.innerHTML = snapshot.val();
}
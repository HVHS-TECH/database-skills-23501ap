/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");


 let scoreObject = {
  "Dwayne J": 300,
  "Ben Britton":3
 }
 
function helloWorld() {
  console.log("helloWorld")
  firebase.database().ref('/').set(
    {
      message: 'Kia ora te ao'
    }
  )
}

function GoodBye() {
  console.log("GoodBye()")
  firebase.database().ref('/').set(
    {
      message: 'ka kite āno'
    }
  )
}

function Users1() {
  console.log(Users1);
  firebase.database().ref('/').set(
    {
      game1: {
        users: {
          Dhruv: 99999,
          Jack: 10000,
          Micheal: "3.141",
          Sasha: 0.5,
          Yug: 987654321,
        }
      }
    }
  );
  firebase.database().ref('/game1/users/Jenna').set(123456789)
  let user = "toby";
  let score = "0";
  firebase.database().ref('/game1/users/' + user).set(
    score

  );
}

function Users2() {
  console.log(Users2)
  firebase.database().ref('/').set(

    {
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
  )
}



function Updatescore() {
  console.log(Updatescore)
  firebase.database().ref('/game1/users').update({
    Xavier: 67
  })
}


function highscore() {
  console.log(highscore)

  highscoreTable = {
    game1: {
      users: {
        Dhruv: 99999,
        Jack: 10000,
        Micheal: "3.141",
        Sasha: 0.5,
        Yug: 987654321
      }
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
  firebase.database().ref('/').set(highscoreTable)
}




























function fb_readError(error) {
  console.log("There was an error reading the message");
  console.error(error);
}

function fb_readlistener() {
  console.log("Read Listener");
  firebase.database().ref('/message').on('value', fb_logDatabaseRead)
}


function display(snapshot) {
  console.log("Running display(), the message is:" + snapshot.val())
  HTML_OUTPUT.innerHTML = snapshot.val();
}
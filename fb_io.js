firebase.database( ).ref( '/message' ).once( 'value', 'snapshot.val')
function snapshot(snapshot){
    console.log(snapshot.val());
}






Function simpleRead() function.
function simpleRead() {
console.log("Reading message");
firebase.database().ref('/message').once('value', display);
console.log("Leaving simpleRead")

dd a display() function.

function display(snapshot) {
console.log("Running display(), the message is: " + snapshot.val())
HTML_OUTPUT. innerHTML = snapshot.val();

}
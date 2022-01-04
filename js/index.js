/* ********** GLOBAL INIT*********** */
var auth = firebase.auth();
var googleAuth = new firebase.auth.GoogleAuthProvider();
var db = firebase.database();


/* ********** FUNCTION INIT*********** */


/* ********** EVENT CALLBACK*********** */
function onAuthChanged(user) {
  
  if(user) {
    $('bt-login').hide();
    $('bt-logout').show();
    $('photo-logo img').attr('src', user.photoURL);
    $('photo-logo').show();
    $('icon-log0').hide();
  }
  else {
    $('bt-login').show();
    $('bt-logout').hide();
    $('photo-logo').hide();
    $('icon-log0').show();
  }
}

function onLogin() {
  auth.signInWithPopup(googleAuth);
  // auth.signInWithRedirect(googleAuth);
}

function onLogout() {
  auth.signOut();
}

/* ********** EVENT INIT*********** */
auth.onAutHStateChanged(onAutHStateChanged);
$('.bt-login').click(onLogin);
$('.bt-logout').click(onLogout);
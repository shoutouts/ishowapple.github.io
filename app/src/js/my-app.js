// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add views
var mainView = myApp.addView('.view-main', {  
    dynamicNavbar: true
});
var view2 = myApp.addView('#view-2', {
    dynamicNavbar: true
});
var view3 = myApp.addView('#view-3', {
    dynamicNavbar: true
});
var view4 = myApp.addView('#view-4', {
    dynamicNavbar: true
});
var view5 = myApp.addView('.view-5', {
    dynamicNavbar: true
});


var dateGreeting = function(date) {
    var hours = (new Date).getHours();
    var result = '';
    if(hours  < 12) {
        return "Good Morning!";
    }
    else if(hours < 17) {
        return "Good Afternoon";
    }
    else {
        return "Good Night"
    }
};
var morning = new Date(2012, 8, 30, 2, 34);
document.write('<p>' + morning.toString() + ' ->' + dateGreeting
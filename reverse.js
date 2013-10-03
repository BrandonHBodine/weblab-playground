
var reverse = function(text) {
    backwords = [];
    for(var indexEnd = text.length - 1; indexEnd >= 0; indexEnd--) {
        backwords += text.charAt(indexEnd);
    }
    console.log(backwords);
    return backwords;
};
document.write(reverse("Hey i might have fixed this"));
        
        
        
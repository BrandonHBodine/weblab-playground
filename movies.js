var items = [
    'The Shawshank Redemption,1994,1043071',
    'The Godfather,1972,732416',
    'The Godfather: Part II,1974,474640',
    'Pulp Fiction,1994,806431',
    'The Dark Knight,2008,1017508',
    '12 Angry Men,1957,255846',
    'Schindler\'s List,1993,528900',
    'The Lord of the Rings: The Return of the King,2003,738931',
    'Fight Club,1999,791186',
    'Star Wars: Episode V - The Empire Strikes Back,1980,503348'
];
/* Takes a pre formatted list of movies, parses the data, and returns the movies sorted by year */

var movieSorter = function(list) {
    var element = [];
    for(var index = 0; index < list.length; index++) {
       var tokens = list[index].split(',');
        var movie = {
            title: tokens[0],
            year: parseInt(tokens[1]),
            votes: parseInt(tokens[2])
        }
        element.push(movie);
    }
    
    var sorty = function(lhs, rhs) {
        if(lhs.year < rhs.year) {
            return -1}
        else if(lhs.year > rhs.year) {
            return 1}
        else {
            return 0;
        }
    }
		
    return element.sort(sorty);
};
var result = movieSorter(items);
    document.write('<pre>' + JSON.stringify(result, null, '  ') + '</pre>');
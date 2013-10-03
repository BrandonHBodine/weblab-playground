var filterWordLength = function(list, howLong) {
    var answer = [];
    for (var index = 0; index < list.length; index++){
        var element = list[index];
        if (element.length > howLong) {
            answer.push(element);
        }
    } return answer;
}
        
 document.write(filterWordLength(["this", "that", "i", "hot", "cold", "us", "fiver"], 3));       


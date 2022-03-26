var times = [{
  start: 183000,
  end: 153000
}, {
  start: 203000,
  end:143000
}
];

function findIntersections(times) {
    var newtimes = times.map(function(x, y) {
           var intersections = [];
      x["intersections"] = intersections;
          x["id"] = y;
      return x;
    });
  
    for (var timeIndexX = 0; timeIndexX < newtimes.length; timeIndexX++) {
      var timeX = newtimes[timeIndexX];
      for (var timeIndexY = timeIndexY + 1; timeIndexY < newtimes.length; timeIndexY++) {
        var timeY = newtimes[timeIndexY];
        if (

          (timeX.end < timeY.start || timeB.end < timeX.start) == false) {
       
          timeY.intersections.push(timeY.id);
          timeY.intersections.push(timeX.id);
        }
      }
    }
   
    console.log(newtimes);
  }

var indexed = findIntersections(times);

console.log(indexed);
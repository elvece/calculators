var calc =
{max: function (arrayNum){
    var max = arrayNum[0];
    for ( var i=1; i<arrayNum.length; i++){
    if (max<arrayNum[i]){
        max=arrayNum[i];
      }
    }
    return max;
  },

 avg: function(arrayNum){
    var sum = 0;
    for ( var i = 0; i < arrayNum.length; i++){
       sum += arrayNum[i];
    }
    return sum/arrayNum.length;
    }
  };

calc.avg([10, 188, 5, 20, 3, 77]);

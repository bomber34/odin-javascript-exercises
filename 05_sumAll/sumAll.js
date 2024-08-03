const sumAll = function(rangeStart, rangeEnd) {
    if (typeof rangeStart != "number"
        || typeof rangeEnd != "number"
        || rangeStart < 0
        || rangeEnd < 0
        || Math.floor(rangeStart) !== rangeStart
        || Math.floor(rangeEnd) !== rangeEnd
     ) {
        return "ERROR";
     }

     let min = Math.min(rangeStart, rangeEnd) - 1;
     let max = Math.max(rangeStart, rangeEnd);

     let totalSum = (max * (max + 1)) / 2;
     let subTractableSum = (min * (min + 1)) / 2;
     return totalSum - subTractableSum;
};

// Do not edit below this line
module.exports = sumAll;

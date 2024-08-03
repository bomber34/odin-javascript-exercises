const AMOUNT_OF_ITEMS_TO_BE_REMOVED = 1;
const INDEX_OF_ITEMS_TO_BE_REMOVED_START_LIST = 1;

const isRemoved = function(list, index) {
    if (index >= 0) {
        list.splice(index, AMOUNT_OF_ITEMS_TO_BE_REMOVED);
        return true;
    }
    return false;
}

const removeElementFromArray = function (list, removeObj) {
    return list.findIndex((elem) => {
        return elem === removeObj;
    })
}

const removeFromArray = function(list) {
    let copyOfList = structuredClone(list);
    let removeObjList = Array.from(arguments).slice(INDEX_OF_ITEMS_TO_BE_REMOVED_START_LIST);
    for (removeObj of removeObjList) {
        while(isRemoved(copyOfList, removeElementFromArray(copyOfList, removeObj))) {
            // Everything is done in condition
        }
    }
    return copyOfList;
};

// Do not edit below this line
module.exports = removeFromArray;

function count_same_elements(collection) {
    //在这里写入代码
    var result = [];
    var key = [];
    var count = [];

    collection.forEach(function(each) {
        var index = key.indexOf(each);
        if(index != -1) {
            count[index]++;

        }else {
            if(each.indexOf('-') != -1) {
                key.push(each.split('-')[0]);
                count.push(parseInt(each.split('-')[1]));
            } else if(each.indexOf('[') != -1) {
                key.push(each[0]);
                count.push(parseInt(each.slice(each.indexOf('[')+1), each.indexOf(']')));
            }
            else {
                key.push(each);
                count.push(1);
            }
        }
    });

    key.forEach(function(each, index) {
        result.push({key: each, count: count[index]});
    });

    return result;
}

module.exports = count_same_elements;

//var collection = [
//    "a","a","a",
//    "e","e","e","e","e","e","e",
//    "h", "h","h","h","h","h","h[3]","h","h",
//    "t","t-2","t","t","t","t","t","t","t[10]",
//    "f","f","f","f","f","f","f","f","f",
//    "c:8",
//    "g","g","g","g","g","g","g",
//    "b","b","b","b","b","b",
//    "d-5"
//];
//
//it("把A集合中相同的元素统计出数量", function () {
//    var result = count_same_elements(collection);
//
//    expect(result).toBe([
//        {name: "a", summary: 3},
//        {name: "e", summary: 7},
//        {name: "h", summary: 11},
//        {name: "t", summary: 20},
//        {name: "f", summary: 9},
//        {name: "c", summary: 8},
//        {name: "g", summary: 7},
//        {name: "b", summary: 6},
//        {name: "d", summary: 5}
//    ]);
//});
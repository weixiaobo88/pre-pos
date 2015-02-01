function count_same_elements(collection)
{
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
            }else {
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



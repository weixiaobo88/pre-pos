function collect_same_elements(collection_a, collection_b)
{
    //在这里写入代码
    var result = [];

    collection_a.forEach(function(each_in_a) {
        collection_b.forEach(function(each_in_b) {
            if(each_in_a === each_in_b) {
                result.push(each_in_a);
            }
        })
    });

    return result;
}

module.exports = collect_same_elements;


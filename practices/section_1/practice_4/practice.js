function collect_same_elements(collection_a, object_b) {
    //在这里写入代码

    var key_in_a = [];
    var value_in_b = object_b.value;
    var result = [];

    collection_a.forEach(function(each_in_a) {
        key_in_a.push(each_in_a.key);
    });

    key_in_a.forEach(function(each_key) {
        value_in_b.forEach(function(each_value) {
            if(each_key === each_value) {
                result.push(each_key);
            }
        })
    });

    return result;
}

module.exports = collect_same_elements;
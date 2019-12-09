function getPINs(observed) {
    const observed_arr = observed.split('');

    observed_arr.reduce((final_arr, current_value, current_index) => {
            if (final_arr.length == 0) {
                return key_map[current_value];
            } else {

                for (let i in final_arr) {
                    var new_element = []

                    for (let j in key_map[current_value]) {
                        var bufer = [];
                        bufer = bufer.concat(i, j);
                        new_element.push(bufer);
                    }

                    i = new_element;

                }

                return final_arr;

            });
    }
}, [])
}

var key_map = [
    [0, 8],
    [1, 2, 4],
    [1, 2, 3, 5],
    [2, 3, 6],
    [1, 4, 5, 7],
    [2, 4, 5, 6, 8],
    [4, 7, 8],
    [0, 5, 7, 8, 9],
    [6, 8, 9]
];




describe('example tests', function() {
    var expectations = {
        "8": ["5", "7", "8", "9", "0"],
        "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
        "369": ["339", "366", "399", "658", "636", "258", "268", "669", "668", "266", "369", "398", "256", "296", "259", "368", "638", "396", "238", "356", "659", "639", "666", "359", "336", "299", "338", "696", "269", "358", "656", "698", "699", "298", "236", "239"]
    };

    for (var pin in expectations) {
        Test.assertSimilar(getPINs(pin).sort(), expectations[pin].sort(), 'PIN: ' + pin);
    }
});
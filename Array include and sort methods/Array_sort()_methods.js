function func() {

    // Original string
    var arr = ["NRS", "for", "NRS"]
    
    console.log(arr);
    // Sorting the array
    console.log(arr.sort());
    }
    func();



    function func() {
        //Original string
        var arr = [2, 5, 8, 1, 4]
        
        //Sorting the array
        console.log(arr.sort());
        console.log(arr);
        }
        func();

        // JavaScript to illustrate sort() function
function func() {

    // Original array
    var arr = [2, 5, 8, 1, 4];
    console.log(arr.sort(function(a, b) {
    return a + 2 * b;
    }));
    console.log(arr);
    }
    func();
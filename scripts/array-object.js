let arr = [-1, 5, "cat", false, 10.2, true, "dog"];

function toObject(array) {
    let obj = {};

    // loop through  input to add keys and values
    for(let i = 0; i < array.length; i++) {
        // get the current 'key' for our array[i]
        let temp = (typeof array[i]).toString() + "s";

        // if key exists, we add our next value
        if(obj.hasOwnProperty(temp)) {
            obj[temp].push(array[i]);
        } else {
            obj[temp] = [];
            obj[temp].push(array[i]);
        }
    }
    return "var result = " + JSON.stringify(obj, null, 3); // return  HTML output
}
document.getElementById("output").innerHTML = toObject(arr);
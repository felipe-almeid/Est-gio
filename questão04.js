Array = [5, 3, 2, 4, 7, 1, 0, 6]

Array.sort(function(a,b) {
    return a - b
})

var ar = ""
for (var it = 0; it < Array.length; it++) {
    ar += Array[it] + ","
}

console.log(ar)
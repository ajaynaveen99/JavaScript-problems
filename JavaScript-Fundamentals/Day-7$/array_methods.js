/************************************************************
 *  ARRAY – FULL MEDIUM-LEVEL FILE (≈ 45 METHODS)
 *  Organized using: Style 3 (Groups + Individual Sections)
 ************************************************************/


/**********************
 * 1) CONSTRUCTOR
 **********************/

/***** Array Constructor *****/
// Used to create arrays. Prefer [] in real code.
let a1 = new Array(3); 
// -> Creates [empty × 3]

let a2 = new Array(10, 20, 30);
// -> [10, 20, 30]

let a3 = []; 
// Best practice


/**********************
 * 2) STATIC METHODS
 * These belong to Array itself (Array.method())
 **********************/

/***** Array.isArray() *****/
// Checks if value is an array
console.log(Array.isArray([1, 2])); // true
console.log(Array.isArray("hello")); // false


/***** Array.from() *****/
// Converts array-like / iterable to array
console.log(Array.from("ABC")); // ["A", "B", "C"]
console.log(Array.from([1,2,3], x => x * 2)); // [2,4,6]


/***** Array.of() *****/
// Creates array from values
console.log(Array.of(1, 2, 3)); // [1,2,3]


/***** Array.fromAsync() (ES2023) *****/
// Creates array from async iterable (rare beginner use)
// Example skipped for simplicity


/***** Array.prototype *****/
// Prototype object (stores instance methods)
console.log(typeof Array.prototype); // "object"



/**********************
 * 3) INSTANCE PROPERTIES
 **********************/

/***** length *****/
// Shows number of elements. Auto-updates.
let arrLen = [10, 20, 30];
console.log(arrLen.length); // 3

// You can modify it:
arrLen.length = 1;
console.log(arrLen); // [10]



/*******************************************
 * 4) INSTANCE METHODS — MUTATING (Changes array)
 *******************************************/

let mArr = [10, 20, 30];

/***** push() *****/
// Adds element at end
mArr.push(40); 
console.log(mArr); // [10,20,30,40]


/***** pop() *****/
// Removes last element
mArr.pop(); 
console.log(mArr); // [10,20,30]


/***** unshift() *****/
// Adds at beginning
mArr.unshift(5);
console.log(mArr); // [5,10,20,30]


/***** shift() *****/
// Removes from beginning
mArr.shift();
console.log(mArr); // [10,20,30]


/***** splice(start, deleteCount, ...items) *****/
// Add/remove/replace
let sp = [1,2,3,4];
sp.splice(1, 2, "A", "B");
console.log(sp); // [1, "A", "B", 4]


/***** sort() *****/
// Sorts alphabetically by default
let s = [3, 10, 2];
s.sort();
console.log(s); // [10,2,3]  (string sort)

// With compare function:
s.sort((a,b) => a - b);
console.log(s); // [2,3,10]


/***** reverse() *****/
let r = [1,2,3];
r.reverse();
console.log(r); // [3,2,1]


/***** fill(value, start?, end?) *****/
let f = [1,2,3,4];
f.fill(0, 1, 3);
console.log(f); // [1,0,0,4]


/***** copyWithin(target, start, end?) *****/
let c = [1,2,3,4];
c.copyWithin(1, 2);
// copy index 2 → index 1
console.log(c); // [1,3,4,4]



/**************************************************
 * 5) INSTANCE METHODS — NON-MUTATING (returns new array)
 **************************************************/

let nArr = [1,2,3,4,5];

/***** slice(start, end) *****/
// Copies part of array
console.log(nArr.slice(1, 3)); // [2,3]
console.log(nArr); // unchanged


/***** concat() *****/
console.log([1,2].concat([3,4])); // [1,2,3,4]


/***** map() *****/
// Creates new array from applied function
console.log([1,2,3].map(x => x * 2)); // [2,4,6]


/***** filter() *****/
// Keeps only items passing condition
console.log([1,2,3,4].filter(x => x % 2 === 0)); // [2,4]


/***** flat(depth) *****/
// Flattens nested arrays
console.log([1, [2, [3]]].flat(1)); // [1,2,[3]]


/***** flatMap() *****/
// map + flat(1)
console.log([1,2,3].flatMap(x => [x, x*2]));
// [1,2,2,4,3,6]


/***** toReversed() (ES2023) *****/
// Like reverse(), but DOES NOT modify original
let tr = [1,2,3];
console.log(tr.toReversed()); // [3,2,1]
console.log(tr); // [1,2,3]


/***** toSorted() (ES2023) *****/
let ts = [3,1,2];
console.log(ts.toSorted()); // [1,2,3]
console.log(ts); // original unchanged


/***** toSpliced() (ES2023) *****/
// Non-mutating version of splice
let tsp = [1,2,3,4];
console.log(tsp.toSpliced(1,2,"A"));
// [1,"A",4]



/*******************************************
 * 6) SEARCHING / FINDING
 *******************************************/

let sea = [10,20,30,40,30];

/***** indexOf() *****/
// First index of value
console.log(sea.indexOf(30)); // 2


/***** lastIndexOf() *****/
console.log(sea.lastIndexOf(30)); // 4


/***** includes() *****/
console.log(sea.includes(20)); // true


/***** find(callback) *****/
// Returns first matched element
console.log(sea.find(x => x > 25)); // 30


/***** findIndex(callback) *****/
console.log(sea.findIndex(x => x > 25)); // 2


/***** findLast(callback) (ES2023) *****/
console.log(sea.findLast(x => x > 25)); // 30 (from right)


/***** findLastIndex(callback) (ES2023) *****/
console.log(sea.findLastIndex(x => x > 25)); // 4



/*******************************************
 * 7) ITERATION METHODS
 *******************************************/

let it = [10,20,30];

/***** forEach() *****/
// Loops through each element
it.forEach((val, idx) => {
  // val = value, idx = index
});


/***** entries() *****/
// Returns iterator of [index, value]
for (let [idx, val] of it.entries()) {
  // console.log(idx, val);
}


/***** keys() *****/
// Returns iterator of indexes
for (let k of it.keys()) {}


/***** values() *****/
// Returns iterator of values
for (let v of it.values()) {}



/*******************************************
 * 8) REDUCTION METHODS
 *******************************************/

let red = [1,2,3,4];

/***** reduce() *****/
// Reduce array to single value
let sum = red.reduce((acc, val) => acc + val, 0);
console.log(sum); // 10


/***** reduceRight() *****/
// Works right → left
let reverseSum = red.reduceRight((acc, val) => acc + val, 0);
console.log(reverseSum); // 10



/*******************************************
 * 9) STRING / CONVERSION METHODS
 *******************************************/

let conv = [1,2,3];

/***** join() *****/
console.log(conv.join("-")); // "1-2-3"


/***** toString() *****/
console.log(conv.toString()); // "1,2,3"


/***** toLocaleString() *****/
// Uses local formatting rules
console.log(conv.toLocaleString());



/*******************************************
 * 10) ITERATORS & UTILITY METHODS
 *******************************************/

/***** at(index) *****/
// Supports negative indexing
console.log([10,20,30].at(-1)); // 30


/***** every() *****/
// Returns true if all pass test
console.log([2,4,6].every(x => x % 2 === 0)); // true


/***** some() *****/
// Returns true if at least one passes test
console.log([1,3,5,6].some(x => x % 2 === 0)); // true


/***** includes() (already shown above) *****/



/************************************************************
 * END OF FILE — Medium Level Coverage (≈45 methods)
 ************************************************************/


// -------------------------------------------
// 1. Basic boolean results
// -------------------------------------------
console.log("1) Basic boolean results");
console.log(5 > 4);
console.log(5 < 4);
console.log(5 >= 5);
console.log(5 <= 4);
console.log(5 == 5);
console.log(5 != 4);
console.log(5 === 5);
console.log(5 !== 5);
console.log(5 !== "5");
console.log(5 == "5");
console.log(5 === "5");

// -------------------------------------------
// 2. String comparison (lexicographical order)
// -------------------------------------------
console.log("\n2) String comparisons");
console.log("Z" > "A");
console.log("A" > "Z");
console.log("Glow" > "Glee");
console.log("Bee" > "Be");
console.log("apple" > "pineapple");
console.log("2" > "12");
console.log("abc" < "abcd");
console.log("a" === "A");
console.log("a" > "A");
console.log("A" > "a");

// -------------------------------------------
// 3. Comparison of different types
// -------------------------------------------
console.log("\n3) Different type comparisons");
console.log("2" > 1);
console.log("02" > 1);
console.log("2" == 2);
console.log("2" === 2);
console.log(true == 1);
console.log(false == 0);
console.log(true === 1);
console.log(false === 0);
console.log(true > false);
console.log(false < true);
console.log("10" > 9);
console.log("10" < 9);

// -------------------------------------------
// 4. Boolean coercion examples
// -------------------------------------------
console.log("\n4) Boolean coercion");
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean("0"));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean([]));
console.log(Boolean({}));

// -------------------------------------------
// 5. Loose vs Strict equality
// -------------------------------------------
console.log("\n5) Loose vs Strict equality");
console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);
console.log("0" == false);
console.log("0" === false);
console.log(null == undefined);
console.log(null === undefined);
console.log(null == 0);
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);
console.log(undefined <= 0);

// -------------------------------------------
// 6. null and undefined comparisons
// -------------------------------------------
console.log("\n6) null and undefined comparisons");
console.log(null == 0);
console.log(null === 0);
console.log(null > 0);
console.log(null < 0);
console.log(null >= 0);
console.log(null <= 0);
console.log(undefined == null);
console.log(undefined === null);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined === 0);

// -------------------------------------------
// 7. Special coercion cases
// -------------------------------------------
console.log("\n7) Special coercion cases");
console.log(true + false);
console.log(1 + "2");
console.log("1" + 2);
console.log("1" - 2);
console.log("6" / "3");
console.log("6" * "3");
console.log("6" / "a");
console.log("a" > "b");
console.log("b" > "a");
console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(NaN != NaN);
console.log(typeof NaN);

// -------------------------------------------
// 8. Equality corner cases
// -------------------------------------------
console.log("\n8) Equality corner cases");
console.log(0 == "0");
console.log(0 === "0");
console.log(false == "0");
console.log(false === "0");
console.log(false == []);
console.log(false == {});
console.log(false == null);
console.log(0 == []);
console.log(0 == {});
console.log(0 == null);
console.log("" == []);
console.log("" == {});
console.log("" == null);

// -------------------------------------------
// 9. Numeric conversions inside comparisons
// -------------------------------------------
console.log("\n9) Numeric conversion cases");
console.log("5" > 4);
console.log("5" < 6);
console.log("5" >= 5);
console.log("5" <= 5);
console.log("05" == 5);
console.log("05" === 5);
console.log(+true);
console.log(+false);
console.log(+null);
console.log(+undefined);
console.log(+"10");
console.log(+"10px");

// -------------------------------------------
// 10. null, undefined, NaN together
// -------------------------------------------
console.log("\n10) null, undefined, NaN tests");
console.log(null == undefined);
console.log(null === undefined);
console.log(null == NaN);
console.log(undefined == NaN);
console.log(NaN == NaN);
console.log(null > NaN);
console.log(undefined > NaN);
console.log(0 > NaN);
console.log(NaN > 0);
console.log(NaN == 0);
console.log(NaN === 0);

// -------------------------------------------
// 11. Combined tricky tests
// -------------------------------------------
console.log("\n11) Combined tricky cases");
let a = 0;
let b = "0";
console.log(a == b);
console.log(Boolean(a));
console.log(Boolean(b));
console.log(a === b);
console.log(a != b);
console.log(a !== b);
console.log(a < b);
console.log(a > b);
console.log(a >= b);
console.log(a <= b);
console.log(a == false);
console.log(b == false);
console.log(b === false);

// -------------------------------------------
// 12. Given task expressions
// -------------------------------------------
console.log("\n12) Task expressions");
console.log(5 > 4);
console.log("apple" > "pineapple");
console.log("2" > "12");
console.log(undefined == null);
console.log(undefined === null);
console.log(null == "\n0\n");
console.log(null === +"\n0\n");

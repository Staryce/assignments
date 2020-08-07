let total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}

console.log(total);

console.log(sum(range(1,10)));

for (let i = 0; i <10; i++) {
    console.log(i);
}

function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
    action(i);
    }
}

repeat(2, console.log)
// 0
// 1
// 2

let labels = []
repeat(5, i => {
    labels.push('Unit ${i + 1}');
});

console.log(labels);
// ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]

function greaterThan(n) {
    return m => m > n;

}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11))
// True

function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result)
        return result;
    };
}
noisy(Math.min)(3,2,1);
// calling with [3, 2, 1]
// called with [3, 2, 1], returned 1

function unless(test, then) {
    if (!test) then();
}

repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even")
    });
});
// 0 is even
// 2 is even

["A", "B"].forEach(l => console.log(l));
// A
// B

function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

console.log(filter(SCRIPTS, script => script.living));
// [{name: "Adlam", ...}, ...]

console.log(SCRIPTS.filter(s => s.direction == "ttb"));
// [{name: "Mongolian", ...}, ...]

function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

let rtlScrpits = SCRIPTS.filter(s => s.direction == "rtl")
console.log(map(rtlScrpits, s => s.name));
// ["Adlam, "Arabic", "Imperial Aramaic", ...]

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// 10
console.log(reduce([1, 2, 3, 4], (a, b) => a + b));
// 10

function characterCount(script) {
    return script.ranges.reduce((count, [from,to]) => {
        return count + (to -from);
    }, 0);
}

console.logt(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));
// {name: "Han"}

let biggest = null;
for (let script of SCRIPTS) {
    if (biggest == null ||
        characterCount(biggest) < characterCount(script)) {
            biggest = script;
        }
}
console.log(biggest);
// {name: "Han", ...}

function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(
    SCRIPTS.filter(s => s.living).map(s => s.year)
)));
// 1165
console.log(Math.round(average(
    SCRIPTS.filter(s => !s.living).map(s => s.year)
)));
// 204

function characterScrpit(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

console.log(characterScrpit(121));
// {name: "Latin", ...}

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count ++;
        }
    }
    return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// [{name: false, count: 2}], {name: true, count: 4}]






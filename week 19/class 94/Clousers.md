# JavaScript Closures – Interview Style Questions & Answers

This document compiles common **closure-based interview questions** with answers. These simulate how you'd be asked in a real interview – minimal hints and maximum clarity.

---

### 1. **Function Returning Function (Closure Basics)**
```js
function x(a) {
    return (b) => {
        console.log("sum :", a + b);
    };
}

let a = x(10);
a(20); // Output: sum : 30
```
> ✅ **Explanation:** The returned function keeps access to variable `a` from the outer scope due to closure. Even after `x` has returned, `a` is remembered.

---

### 2. **Greeter Using Closures**
```js
function greeter(x) {
    return (y) => {
        console.log(x + " " + y);
    };
}

greeter("oyee")("anish"); // Output: oyee anish
```
> ✅ **Explanation:** Outer parameter `x` is retained inside the returned function.

---

### 3. **Toggle Using Closures**
```js
function toggle() {
    let t = "off";
    return () => {
        t = t === "off" ? "on" : "off";
        console.log(t);
    };
}

let t = toggle();
t(); // on
t(); // off
t(); // on
```
> ✅ **Explanation:** The state `t` is preserved between calls using closure.

---

### 4. **Simple Auth System**
```js
function auth(pass) {
    let setpass = pass;
    return (p) => {
        if (setpass == p) console.log("Login Successful");
        else console.log("Login Failed");
    };
}

auth(123)(123);   // Output: Login Successful
auth(123)(1234);  // Output: Login Failed
```
> ✅ **Explanation:** Password is preserved inside closure.

---

### 5. **Rate Limiter using Closures**
```js
function rate_limit_API() {
    let allow = true;

    return () => {
        if (!allow) {
            console.log("⛔ Wait for 3 seconds!");
            return;
        }

        console.log("✅ HI API RESPONSE");
        allow = false;

        setTimeout(() => {
            allow = true;
            console.log("🔓 You can call again now!");
        }, 3000);
    };
}

let a = rate_limit_API();
a(); a(); a();
```
> ✅ **Explanation:** Controls access using the `allow` flag retained through closure.

---

### 6. **Call Function Every 3 Inputs**
```js
function abc(a, b, c) {
    console.log("Anish", a, b, c);
}

let threetime = (fn) => {
    let arr = [];
    const inner = (x) => {
        arr.push(x);
        if (arr.length % 3 === 0) {
            let [a, b, c] = arr.slice(-3);
            fn(a, b, c);
        }
        return inner;
    };
    return inner;
};

let x = threetime(abc);
x(1)(2)(3); // Anish 1 2 3
x(4)(5)(6); // Anish 4 5 6
```
> ✅ **Explanation:** Accumulates values using closure and triggers function after every 3 inputs.

---

### 🔥 Advanced Interview Closure Questions with Answers

#### Q1. Implement `once(fn)` – allows the function to run only once
```js
const once = (fn) => {
    let called = false;
    return (...args) => {
        if (!called) {
            called = true;
            return fn(...args);
        }
    };
};

let callOnce = once(() => console.log("Called!"));
callOnce(); // Called!
callOnce(); // No output
```
> ✅ **Explanation:** Closure stores `called` flag.

---

#### Q2. Counter that remembers and increments
```js
const counter = (start) => {
    let count = start;
    return () => ++count;
};

let count = counter(5);
console.log(count()); // 6
console.log(count()); // 7
```
> ✅ **Explanation:** Closure holds and updates `count`.

---

#### Q3. Function result caching (memoization)
```js
const cacheFn = (fn) => {
    const cache = {};
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache[key]) return cache[key];
        cache[key] = fn(...args);
        return cache[key];
    };
};

const add = (a, b) => {
    console.log("Calculating");
    return a + b;
};

const cachedAdd = cacheFn(add);
cachedAdd(2, 3); // Calculating → 5
cachedAdd(2, 3); // Cached → 5
```
> ✅ **Explanation:** Uses closure to remember results by argument combinations.

---

#### Q4. Delay function execution by `t` ms
```js
const delay = (fn, t) => {
    return () => {
        setTimeout(fn, t);
    };
};

let delayedLog = delay(() => console.log("Hello"), 2000);
delayedLog(); // Logs after 2 sec
```
> ✅ **Explanation:** Uses closure to bind `fn` and `t`.

---

#### Q5. Throttle: Limit function execution frequency
```js
const throttle = (fn, wait) => {
    let lastTime = 0;
    return () => {
        const now = Date.now();
        if (now - lastTime >= wait) {
            fn();
            lastTime = now;
        }
    };
};

let throttled = throttle(() => console.log("API called"), 2000);
throttled(); // logs
throttled(); // ignored if called within 2 sec
```
> ✅ **Explanation:** Stores `lastTime` using closure to control frequency.

---

Need more advanced closures, async interview rounds, or React-specific closure behavior? Just ping me! 🚀


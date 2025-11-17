
# 📘 **Interview Questions – Blog Task**

### ✍️ *By Shahid Ahamed*

---

# ## **1️⃣ Interfaces vs Types — TypeScript এ পার্থক্য**

TypeScript-এ **interface** এবং **type**—দুটিই object-এর structure নির্ধারণ করতে ব্যবহৃত হয়। তবে এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে যেমন:

---

## 🔹 **1. Declaration Merging**

**interface merge হতে পারে**, কিন্তু **type merge হয় না।**

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

// Result:
const person: User = { name: "Shahid", age: 22 };
```

কিন্তু type এ এটি করা যাবে না:

```ts
type User = { name: string };
type User = { age: number }; // ❌ Error
```

---

## 🔹 **2. Extending**

দুটোই extend করা যায়, কিন্তু interface একটু বেশি flexible।

```ts
interface A { name: string }
interface B extends A { age: number }
```

type দিয়ে:

```ts
type A = { name: string };
type B = A & { age: number };
```

---

## 🔹 **3. Union & Intersection শুধুমাত্র type দিয়ে করা যায়**

```ts
type Status = "success" | "error" | "loading";  // ✔ possible
```

interface দিয়ে union/primitive type তৈরি করা যায় না।

---

## 🔹 **4. React Community Preference**

React প্রজেক্টে সাধারণত **type** বেশি ব্যবহার করা হয়, কারণ এটির flexibility একটু বেশি।

---

## ⭐ **Conclusion**

| বৈশিষ্ট্য       | Interface        | Type                       |
| --------------- | ---------------- | -------------------------- |
| Merge হয়        | ✔                | ❌                          |
| Extend করা যায়  | ✔                | ✔                          |
| Union/Primitive | ❌                | ✔                          |
| ব্যবহার         | Object structure | Object + Union + Primitive |

---

---

# ## **2️⃣ any, unknown এবং never — TypeScript এ পার্থক্য**

এগুলো TypeScript-এর খুব গুরুত্বপূর্ণ তিনটি special type।

---

# ### **🔹 any — সবচেয়ে flexible (এটি type safety নষ্ট করে)**

```ts
let data: any = "Hello";
data = 10;
data = true;
```

1. যেকোনো মান রাখা যায়
2. টাইপ চেক করে না


---

# ### **🔹 unknown — নিরাপদ any**

`unknown` সবকিছু store করতে পারে, কিন্তু **ব্যবহারের আগে type-check করতে হয়**।

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());  // ✔ safe
}
```

👉 এটি more secure
👉 ভুল কোড লেখা থেকে বাঁচায়

---

# ### **🔹 never — এমন কিছু যা কখনো ঘটে না**

`never` মানে এমন function যার:

* কখনো return করে না
* অথবা সর্বদা error ছোড়ে

```ts
function throwError(msg: string): never {
    throw new Error(msg);
}
```

```ts
function infinite(): never {
    while (true) {}
}
```

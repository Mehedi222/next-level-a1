# TypeScript-এর `keyof` অপারেটর: এটি কী এবং কেন দরকার?

TypeScript-এ কোড লেখার সময় আমরা প্রায়ই অবজেক্টের প্রপার্টি নিয়ে কাজ করি।  
কিন্তু কী হবে যদি আমরা এমন কোনো প্রপার্টির নাম ব্যবহার করার চেষ্টা করি যার অস্তিত্বই নেই? এখানেই `keyof` অপারেটরটি আমাদের সাহায্য করতে আসে।

---

## `keyof` অপারেটর আসলে কী?

খুব সহজ ভাষায়, `keyof` একটি **টাইপ অপারেটর** যা একটি **object type** থেকে তার সমস্ত কী (key) বা প্রপার্টির নামের একটি **union type** তৈরি করে।

### উদাহরণ

```ts
// একটি User ইন্টারফেস
interface User {
  id: number;
  name: string;
  email: string;
}

// keyof User ব্যবহার করে একটি নতুন টাইপ তৈরি করা
type UserKeys = keyof User;

// UserKeys টাইপটি এখন "id" | "name" | "email" এর সমতুল্য
// এর মানে UserKeys টাইপের ভেরিয়েবলে শুধু এই তিনটি স্ট্রিংই রাখা যাবে।

const myKey: UserKeys = "name"; // এটি সঠিক
// const myKey2: UserKeys = "age"; // এটি ভুল! কারণ "age" User-এর কোনো কী নয়।
/**
 * এই ফাংশনটি টাইপ-সেফ উপায়ে একটি অবজেক্ট থেকে প্রপার্টি ভ্যালু নেয়।
 *
 * T: অবজেক্টের টাইপ (যেমন User)
 * K: অবজেক্টের কী-এর টাইপ (যেমন "name")
 *
 * 'K extends keyof T' নিশ্চিত করে যে 'key' আর্গুমেন্টটি অবশ্যই
 * 'obj' আর্গুমেন্টটির একটি বৈধ কী হতে হবে।
 */
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// --- ফাংশনটি ব্যবহার করা ---

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};

// এটি সম্পূর্ণ টাইপ-সেফ
// TypeScript জানে "name" একটি বৈধ User কী এবং ফাংশনটি 'string' ফেরত দেবে।
const userName: string = getProperty(user, "name");
console.log(userName); // আউটপুট: Alice

// --- এটি কম্পাইল-টাইম এরর দেবে ---
//
// const userAge = getProperty(user, "age");
//
// এরর: Argument of type '"age"' is not assignable to
// parameter of type 'keyof User'.


-----


# শেষ কথা

`keyof` অপারেটর আমাদের কোডকে আরও নিরাপদ এবং শক্তিশালী করে।  
এটি আমাদের ডায়নামিকভাবে অবজেক্টের প্রপার্টি অ্যাক্সেস করার সময় মারাত্মক রান-টাইম এরর (run-time error) থেকে বাঁচায়,  
কারণ এটি ভুলগুলো কম্পাইল করার সময়ই (compile-time) ধরে ফেলে।

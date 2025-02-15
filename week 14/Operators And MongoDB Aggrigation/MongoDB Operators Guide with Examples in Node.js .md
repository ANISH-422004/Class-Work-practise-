# MongoDB Operators Guide with Examples in Node.js

## 1. MongoDB Comparison Operators
Comparison operators are used to filter documents based on specific conditions.

### 1.1 `$eq` (Equal)
Find documents where `age` is equal to 25.
```javascript
const users = await db.collection("users").find({ age: { $eq: 25 } }).toArray();
```

### 1.2 `$ne` (Not Equal)
Find users whose `age` is **not** 25.
```javascript
const users = await db.collection("users").find({ age: { $ne: 25 } }).toArray();
```

### 1.3 `$gt` (Greater Than)
Find users older than 30.
```javascript
const users = await db.collection("users").find({ age: { $gt: 30 } }).toArray();
```

### 1.4 `$gte` (Greater Than or Equal)
Find users aged 30 or older.
```javascript
const users = await db.collection("users").find({ age: { $gte: 30 } }).toArray();
```

### 1.5 `$lt` (Less Than)
Find users younger than 20.
```javascript
const users = await db.collection("users").find({ age: { $lt: 20 } }).toArray();
```

### 1.6 `$lte` (Less Than or Equal)
Find users aged 18 or younger.
```javascript
const users = await db.collection("users").find({ age: { $lte: 18 } }).toArray();
```

### 1.7 `$in`
Find users whose `age` is either 20, 25, or 30.
```javascript
const users = await db.collection("users").find({ age: { $in: [20, 25, 30] } }).toArray();
```

### 1.8 `$nin`
Find users whose `age` is **not** 20, 25, or 30.
```javascript
const users = await db.collection("users").find({ age: { $nin: [20, 25, 30] } }).toArray();
```

## 2. MongoDB Logical Operators
Logical operators combine multiple conditions.

### 2.1 `$and`
Find users who are older than 20 **AND** younger than 30.
```javascript
const users = await db.collection("users").find({ $and: [{ age: { $gt: 20 } }, { age: { $lt: 30 } }] }).toArray();
```

### 2.2 `$or`
Find users who are either younger than 18 **OR** older than 40.
```javascript
const users = await db.collection("users").find({ $or: [{ age: { $lt: 18 } }, { age: { $gt: 40 } }] }).toArray();
```

### 2.3 `$not`
Find users who are **not** 25 years old.
```javascript
const users = await db.collection("users").find({ age: { $not: { $eq: 25 } } }).toArray();
```

### 2.4 `$nor`
Find users who are **not** younger than 18 **AND** **not** older than 40.
```javascript
const users = await db.collection("users").find({ $nor: [{ age: { $lt: 18 } }, { age: { $gt: 40 } }] }).toArray();
```

## 3. MongoDB Array Operators
Array operators help query documents containing arrays.

### 3.1 `$all`
Find users who like **both** "Pizza" and "Burger".
```javascript
const users = await db.collection("users").find({ favorites: { $all: ["Pizza", "Burger"] } }).toArray();
```

### 3.2 `$size`
Find users who have exactly 3 favorite foods.
```javascript
const users = await db.collection("users").find({ favorites: { $size: 3 } }).toArray();
```

### 3.3 `$elemMatch`
Find users who have an order with `price` greater than 50.
```javascript
const users = await db.collection("users").find({ orders: { $elemMatch: { price: { $gt: 50 } } } }).toArray();
```

## 4. MongoDB Aggregation Pipeline
The Aggregation Pipeline is used for advanced data processing.


### 4.1 `$match`
Filters documents based on conditions.
```javascript
const users = await db.collection("users").aggregate([
  { $match: { age: { $gt: 25 } } }
]).toArray();
```

### 4.2 `$group`
Groups documents by a field and performs operations.
```javascript
const result = await db.collection("users").aggregate([
  { $group: { _id: "$age", count: { $sum: 1 } } }
]).toArray();
```

### 4.3 `$sort`
Sort users by age in descending order.
```javascript
const users = await db.collection("users").aggregate([
  { $sort: { age: -1 } }
]).toArray();
```

### 4.4 `$project`
Include only specific fields in the output.
```javascript
const users = await db.collection("users").aggregate([
  { $project: { name: 1, age: 1, _id: 0 } }
]).toArray();
```

### 4.5 `$lookup`
Perform a join with another collection.
```javascript
const result = await db.collection("orders").aggregate([
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "userDetails"
    }
  }
]).toArray();
```

### 4.6 `$unwind`
Deconstructs an array field into multiple documents.
```javascript
const result = await db.collection("users").aggregate([
  { $unwind: "$favorites" }
]).toArray();
```

## Conclusion
This guide covers MongoDB **comparison**, **logical**, **array**, and **aggregation operators** with **Node.js** examples. Let me know if you need further explanations or additional operators! 🚀


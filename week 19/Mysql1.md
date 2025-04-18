# Comprehensive Database Concepts Study Guide

## Table of Contents
- [Introduction to Data and Databases](#introduction-to-data-and-databases)
- [Database Architecture and Models](#database-architecture-and-models)
- [ER Models and Relationships](#er-models-and-relationships)
- [Extended ER Features](#extended-er-features)
- [Relational Model and Keys](#relational-model-and-keys)
- [MySQL Fundamentals](#mysql-fundamentals)
- [Data Manipulation](#data-manipulation)
- [Querying Data](#querying-data)
- [Constraints and Operators](#constraints-and-operators)
- [Clauses](#clauses)
- [Aggregate Functions](#aggregate-functions)
- [String Functions](#string-functions)
- [Numeric Functions](#numeric-functions)
- [Working with Date and Time](#working-with-date-and-time)

## Introduction to Data and Databases

### What is Data?
- **Definition**: Collection of raw bytes
- **Data Pipeline**: data → processed → information → decision making
- **Purpose**: Helps in decision making processes

### What is Database and DBMS?
- **Database**: Storage of data in the form of bytes/bits in a system
- **DBMS (Database Management System)**: Set of programs to access data efficiently
  - **Primary goal**: Store and retrieve data conveniently and efficiently

### Data Storage Options
- **Memory types**: RAM, Cache, HDD, SSD

### File System vs DBMS
- **Example scenario**: Managing normal and premium customers
- **Limitations of file systems**:
  - Difficult to query specific information
  - Limited standardization
  - No centralized control

### Why We Need DBMS
1. **Data Retrieval**: Efficient querying
2. **Data Consistency**: Prevents inconsistent records of the same entity
3. **Reduced Redundancy**: Minimizes duplicates
4. **Improved Access Speed**: Optimized querying
5. **Data Isolation**: Standardized format
6. **Data Integrity**: Enforces checks/limits
7. **Data Security**: Access control and encryption
8. **Atomicity**: Ensures complete process execution

> **Key point**: DBMS addresses the limitations of file systems by providing a structured approach to data management.

## Database Architecture and Models

### Data Abstraction
- **Purpose**: Provides an abstract view of data (e.g., E-commerce platform)
- **Abstraction Levels**:
  1. **Internal/Physical Level**
     - How data is stored at low level (data structures)
     - Physical schema
  2. **Conceptual/Logical Level**
     - What data is stored (typically in tables)
     - Global schema
     - Relationships defined at this level (not at physical level)
  3. **External Level**
     - User view of the data

> **Key advantage**: Data Independence - changes at one level don't necessitate changes at another

### Instance, Schema and Sub-schema
- **Instance**: Collection of information stored in DB at a particular moment
- **Schema**: Overall description/design of the database specified during design
  - Includes attributes, constraints, relationships, etc.
- **Sub-schema**: Different views of the same database

> **Note**: Logical Schema is also known as DB Schema

### Data Models in DBMS
- **Definition**: Ways to describe database design at logical level
- **Types**:
  1. Entity-Relationship Model
  2. Relational Model
  3. Object-Oriented Relational Model

### Database Languages
- **Purpose**: Interface between logical and physical levels
- **Types**:
  1. **DDL (Data Definition Language)**: CREATE, DROP, ALTER, TRUNCATE
     - Also defines consistency constraints
  2. **DML (Data Manipulation Language)**: INSERT, UPDATE, DELETE, LOCK
  3. **DQL (Data Query Language)**: SELECT
  4. **DCL (Data Control Language)**: GRANT, REVOKE
  5. **TCL (Transaction Control Language)**: COMMIT, ROLLBACK

> **Implementation**: SQL implements all these language types

### DBMS Architecture
- **Types**:
  1. **1-Tier Architecture**: Application and database on same machine
  2. **2-Tier Architecture**: Client-server model
  3. **3-Tier Architecture**: Client, application server, and database server
- **Tier 2 vs Tier 3**:
  - **Scalability**: 3-tier is more scalable
  - **Data Integrity**: Better in 3-tier
  - **Security**: Enhanced in 3-tier with intermediate layer

## ER Models and Relationships

### Entity-Relationship (ER) Model
- **Definition**: High-level data model based on real-world perception of objects (entities) and their relationships
- **Purpose**: ER diagrams act as blueprints for database design

### Core Components
1. **Entity & Entity Set**
   - Real-world object with independent existence
   - Collection of similar entities

2. **Attributes**
   - Properties that describe an entity
   - **Types**:
     - **Single-value**: Holds one value (e.g., ID number)
     - **Composite**: Can be divided into smaller parts (e.g., address)
     - **Multi-value**: Can have multiple values (e.g., phone numbers)
     - **Derived**: Value calculated from other attributes (e.g., age from DOB)

> **Example**: ER diagram for social media application would include entities like User, Post, Comment, with appropriate attributes and relationships

### Relationship Types
- **Strong Entity**: Independent of any other entity
- **Weak Entity**: Cannot be uniquely identified without its owner entity
  - Lacks sufficient attributes for unique identification

### Degree of Relationships
1. **Unary**: Relationship within same entity set
   - Example: Employee manages Employee
2. **Binary**: Relationship between two entity sets
   - Example: Student enrolls in Course
3. **Ternary**: Relationship among three entity sets
   - Example: Doctor prescribes Medicine to Patient
4. **N-ary**: Relationship among N entity sets

### Relationship Constraints
1. **Mapping Cardinality**: Number of entities associated via relationship
   - **One-to-One (1:1)**: One entity relates to exactly one other entity
   - **One-to-Many (1:N)**: One entity relates to multiple entities
   - **Many-to-One (N:1)**: Multiple entities relate to one entity
   - **Many-to-Many (M:N)**: Multiple entities relate to multiple entities

2. **Participation Constraints**:
   - **Total**: Every entity participates in the relationship
     - Weak entities always have total participation with their owner
   - **Partial**: Some entities may not participate

> **Key point**: Weak entities always have total participation with their owner entity, but strong entities may have partial participation.

## Extended ER Features

### Specialization
- **Definition**: Top-down approach of identifying subsets with distinctive features
- **Relationship Type**: "IS A" relationship
- **Purpose**: Reduces redundancy by separating distinctive attributes
- **Example**: Person → Student, Employee (specialized entities with unique attributes)

### Generalization
- **Definition**: Bottom-up approach of identifying common features across entities
- **Direction**: Goes from bottom to top (specific to general)
- **Purpose**: Generalizes common attributes in parent entity
- **Example**: Student, Faculty → Person (generalized entity with common attributes)

### Aggregation
- **Definition**: Technique to treat relationships as higher-level entities
- **Purpose**: Enables relationships between relationships
- **Example**: Employee works_on Project creates a new entity that can have relationships with other entities

### Inheritance in ER Models
- **Attribute Inheritance**: Subclass inherits attributes of superclass
- **Participation Inheritance**: Subclass inherits participation constraints

> **Design tip**: When working on ER diagrams, start by identifying the main entities, then establish relationships, and finally refine with specialization or generalization as needed.

## Relational Model and Keys

### Relational Database Management System (RDBMS)
- **Definition**: Software implementing the relational model
- **Examples**: MySQL, Oracle, PostgreSQL

### Types of Keys
1. **Super Key**: Any combination of attributes that uniquely identifies a tuple
   - Can contain redundant attributes

2. **Candidate Key (CK)**: Minimal super key with no redundant attributes
   - **Properties**:
     - Cannot contain NULL values
     - Must uniquely identify each record

3. **Primary Key (PK)**: Selected candidate key designated as main identifier
   - **Properties**:
     - Only one PK per entity
     - Cannot be NULL
     - Should be immutable

4. **Alternate Key**: All candidate keys not selected as primary key

5. **Foreign Key (FK)**: Creates relationships between tables
   - References primary key in another table
   - Can be NULL unless constrained otherwise
   - Can be part of a primary key

6. **Composite Key**: Primary key formed by two or more attributes

7. **Compound Key**: Primary key formed by two or more foreign keys

8. **Surrogate Key**: Synthetic/artificial primary key
   - Generated automatically by database (usually integer)
   - Not derived from application data

> **Design best practice**: Choose primary keys that are stable, simple, and non-null.

### Converting ER Model to Relational Model
- Entities become tables
- Attributes become columns
- Relationships become foreign keys or relationship tables (for M:N)
- Weak entities include owner's primary key as part of their primary key

## MySQL Fundamentals

### Understanding Data
- **Types of data**: Text, numeric, date/time, binary, etc.
- **Storage**: Different internal storage mechanisms depending on data type

### MySQL Applications
1. **Database Server**: Core service that handles requests
2. **MySQL Workbench**: GUI for database design and management
3. **MySQL Command Line Client**: Terminal interface
4. **Connectors/Drivers**: Libraries for application integration

### Basic Rules
- MySQL is case-insensitive for keywords (but case-sensitive for identifiers on some systems)
- Semicolons are required to terminate statements
- Use snake_case for naming conventions

### Database Operations
```sql
-- Create a database
CREATE DATABASE db_name;

-- Use a database
USE db_name;

-- List all databases
SHOW DATABASES;

-- Delete a database
DROP DATABASE db_name;

-- Check current database
SELECT DATABASE();
```

### Basic Data Types
- **INT**: Integer values
- **VARCHAR**: Variable-length character strings

### Table Operations
```sql
-- Create a table
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    ...
);

-- List all tables
SHOW TABLES;

-- View table structure
DESC table_name;
-- OR
SHOW COLUMNS FROM table_name;

-- Delete a table
DROP TABLE table_name;
```

### Transaction Control
- **COMMIT**: Saves changes permanently
- By default, Autocommit is active (each statement is committed automatically)

> **Best practice**: Create descriptive table and column names that reflect their purpose. Use consistent naming conventions.

## Data Manipulation

### Inserting Data
```sql
-- Specifying columns
INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);

-- All columns in order
INSERT INTO table_name VALUES (value1, value2, ...);

-- Using DEFAULT keyword
INSERT INTO table_name (column1, column2) VALUES (DEFAULT, 'value');

-- Handling NULL values
INSERT INTO table_name (column1, column2) VALUES (NULL, 'value');

-- Multiple rows at once
INSERT INTO table_name (column1, column2) VALUES
(value1, value2),
(value3, value4),
(value5, value6);
```

### Copying Table Data
```sql
-- Create a new table from existing data
CREATE TABLE orders_archived AS SELECT * FROM orders;
```

> **Important**: The copied table will not inherit primary keys or auto_increment settings! You need to define these separately.

```sql
-- Adding primary key to copied table
ALTER TABLE orders_archived ADD PRIMARY KEY (order_id);
```

### Constraints on Columns
```sql
-- NOT NULL constraint
CREATE TABLE example (
    id INT NOT NULL,
    name VARCHAR(50) NOT NULL
);

-- DEFAULT value
CREATE TABLE example (
    id INT,
    status VARCHAR(20) DEFAULT 'pending'
);

-- UNIQUE constraint
CREATE TABLE example (
    id INT,
    email VARCHAR(100) UNIQUE
);

-- PRIMARY KEY
CREATE TABLE example (
    id INT PRIMARY KEY,
    name VARCHAR(50)
);

-- AUTO INCREMENT
CREATE TABLE example (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50)
);

-- Customizing AUTO_INCREMENT starting value
CREATE TABLE teacher (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(20),
    email VARCHAR(20)
) AUTO_INCREMENT = 100;
```

### Retrieving Data
```sql
-- Select all columns and rows
SELECT * FROM table_name;

-- Select specific columns
SELECT column1, column2 FROM table_name;

-- Math operations on columns
SELECT price, price * 1.1 AS increased_price FROM products;
```

### Another Way to Set Primary Key
```sql
CREATE TABLE example (
    id INT,
    name VARCHAR(50),
    PRIMARY KEY (id)
);
```

### SQL Clauses
```sql
-- FROM clause
SELECT * FROM customers;

-- WHERE clause for filtering
SELECT * FROM customers WHERE city = 'New York';

-- AS clause for aliases
SELECT first_name AS fname FROM customers;
```

### Updating Rows
```sql
-- Update specific rows
UPDATE table_name SET column1 = 'new_value' WHERE condition;

-- Update all rows (be careful!)
UPDATE table_name SET column1 = 'new_value';
```

### Deleting Data
```sql
-- Delete specific rows
DELETE FROM table_name WHERE condition;

-- Delete all rows (be careful!)
DELETE FROM table_name;
```

> **Warning**: Always use WHERE clauses with UPDATE and DELETE to avoid unintended changes to multiple records.

## Querying Data

### Relational Operators
- Greater than: `>`
- Greater than or equal: `>=`
- Less than: `<`
- Less than or equal: `<=`
- Not equal: `!=` or `<>`
- Equal: `=`

```sql
-- Examples
SELECT * FROM products WHERE price > 100;
SELECT * FROM customers WHERE city <> 'New York';
```

### Logical Operators
- **OR**: Either condition can be true
- **AND**: Both conditions must be true
- **NOT**: Inverts a condition

```sql
-- Examples
SELECT * FROM products WHERE category = 'Books' OR price < 20;
SELECT * FROM customers WHERE city = 'Chicago' AND credit_limit > 1000;
SELECT * FROM products WHERE NOT category = 'Electronics';
```

### Boolean Values
- Represented as 0 (false) or 1 (true)
- Useful in conditional expressions

### IN & NOT IN Operators
```sql
-- IN operator (equivalent to multiple OR conditions)
SELECT * FROM students WHERE semester IN (2, 4, 6);

-- NOT IN operator
SELECT * FROM products WHERE category NOT IN ('Electronics', 'Books');
```

## Clauses

### LIMIT Clause
- Used for pagination
- Must be at the end of the query

```sql
-- Basic limit
SELECT * FROM products LIMIT 10;

-- With offset (skip first 20, show next 10)
SELECT * FROM products LIMIT 10 OFFSET 20;

-- Alternative syntax
SELECT * FROM products LIMIT 20, 10;  -- Offset 20, limit 10
```

### ORDER BY Clause
- Ascending order by default

```sql
-- Single column ordering
SELECT * FROM customers ORDER BY last_name;

-- Descending order
SELECT * FROM products ORDER BY price DESC;

-- Multiple column ordering
SELECT * FROM customers ORDER BY state, city;

-- Mixed direction
SELECT * FROM orders ORDER BY customer_id ASC, total_amount DESC;
```

### DISTINCT Clause
- Eliminates duplicate values
- Comes right after SELECT

```sql
-- Single column
SELECT DISTINCT category FROM products;

-- Multiple columns (unique combinations)
SELECT DISTINCT city, state FROM customers;
```

> **Performance note**: DISTINCT can be resource-intensive on large datasets.

## Constraints and Operators

### NULL Handling
```sql
-- Finding NULL values
SELECT * FROM customers WHERE phone IS NULL;

-- Finding non-NULL values
SELECT * FROM customers WHERE phone IS NOT NULL;
```

### BETWEEN-AND Operator
- Inclusive range

```sql
-- Numeric range
SELECT * FROM products WHERE price BETWEEN 10 AND 20;

-- Date range
SELECT * FROM orders WHERE order_date BETWEEN '2023-01-01' AND '2023-12-31';
```

### LIKE Operator
- Pattern matching for strings

```sql
-- Wildcards:
-- % : Any number of characters (including zero)
-- _ : Exactly one character

-- Examples
SELECT * FROM customers WHERE name LIKE 'J%';  -- Names starting with J
SELECT * FROM products WHERE description LIKE '%wireless%';  -- Contains "wireless"
SELECT * FROM customers WHERE phone LIKE '___-___-____';  -- Specific format
```

### REGEXP Operator
- More powerful pattern matching
- Symbols:
  - `^`: Start of string
  - `$`: End of string
  - `|`: OR operator
  - `[]`: Character list

```sql
-- Examples
SELECT * FROM customers WHERE name REGEXP '^[JT]';  -- Names starting with J or T
SELECT * FROM products WHERE name REGEXP 'phone|laptop';  -- Contains "phone" or "laptop"
SELECT * FROM customers WHERE phone REGEXP '[0-9]{3}-[0-9]{3}-[0-9]{4}';  -- Format validation
```

### COUNT Function
```sql
-- Count all rows
SELECT COUNT(*) FROM customers;

-- Count unique values
SELECT COUNT(DISTINCT city) FROM customers;

-- Count with condition
SELECT COUNT(*) FROM orders WHERE status = 'Shipped';
```

## Aggregate Functions

### Common Aggregate Functions
```sql
-- COUNT: Number of rows
SELECT COUNT(*) FROM orders;

-- MIN: Minimum value
SELECT MIN(price) FROM products;

-- MAX: Maximum value
SELECT MAX(price) FROM products;

-- SUM: Sum of values
SELECT SUM(total) FROM orders;

-- AVG: Average value
SELECT AVG(price) FROM products;

-- LENGTH: String length
SELECT name, LENGTH(name) AS name_length FROM customers;
```

### GROUP BY Clause
- Groups rows with the same values
- Often used with aggregate functions

```sql
-- Group by one column
SELECT category, COUNT(*) FROM products GROUP BY category;

-- Group by multiple columns
SELECT state, city, COUNT(*) FROM customers GROUP BY state, city;
```

> **Important**: If you encounter "ONLY_FULL_GROUP_BY" errors, you can modify MySQL settings:
```sql
SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
```

### HAVING Clause
- Filters groups (similar to WHERE but for grouped data)

```sql
-- Filter after grouping
SELECT category, COUNT(*) AS product_count 
FROM products 
GROUP BY category 
HAVING product_count > 10;
```

### Extended Data Types
- **CHAR(n)**: Fixed-length string (padded with spaces)
- **DECIMAL(p,s)**: Exact numeric with precision p and scale s
  - Example: DECIMAL(6,2) - up to 6 digits with 2 after decimal point
- **BLOB**: Binary Large Object for binary data
- **FLOAT/DOUBLE**: Approximate numeric types (less precise than DECIMAL)
- **JSON**: Native JSON data type

> **Decimal vs Float/Double**: Use DECIMAL for financial calculations where precision is critical. Use FLOAT/DOUBLE for scientific calculations where approximate values are acceptable.

## String Functions

### Text Manipulation
```sql
-- Character length
SELECT CHAR_LENGTH(name) FROM customers;
-- OR
SELECT CHARACTER_LENGTH(name) FROM customers;

-- Concatenation
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM customers;
-- With separator
SELECT CONCAT_WS(', ', city, state, zip) AS address FROM customers;

-- Case conversion
SELECT UPPER(name) FROM products;  -- or UCASE()
SELECT LOWER(email) FROM customers;  -- or LCASE()

-- Remove whitespace
SELECT TRIM(description) FROM products;

-- Substring extraction
SELECT SUBSTRING(description, 1, 50) FROM products;
-- OR
SELECT SUBSTR(description, 1, 50) FROM products;

-- Insert within string
SELECT INSERT('Hello World', 7, 5, 'MySQL') AS result;  -- "Hello MySQL"

-- Replace substrings
SELECT REPLACE(description, 'old', 'new') FROM products;

-- Reverse string
SELECT REVERSE(name) FROM products;

-- String comparison
SELECT STRCMP('text1', 'text2') FROM dual;  -- Returns -1, 0, or 1
```

## Numeric Functions

### Mathematical Operations
```sql
-- Absolute value
SELECT ABS(-42);  -- 42

-- Ceiling (round up)
SELECT CEIL(42.1);  -- 43

-- Floor (round down)
SELECT FLOOR(42.9);  -- 42

-- Modulo (remainder)
SELECT MOD(10, 3);  -- 1

-- Pi constant
SELECT PI();  -- 3.141593

-- Power
SELECT POW(2, 3);  -- 8

-- Random number
SELECT RAND();  -- Between 0 and 1

-- Round to nearest integer
SELECT ROUND(42.4);  -- 42
SELECT ROUND(42.5);  -- 43

-- Round to decimal places
SELECT ROUND(42.456, 2);  -- 42.46

-- Square root
SELECT SQRT(16);  -- 4

-- Truncate (cut off decimal places)
SELECT TRUNCATE(42.456, 1);  -- 42.4

-- Integer division
SELECT 40 DIV 2;  -- 20
```

## Working with Date and Time

### Date/Time Data Types
1. **DATE**
   - Format: YYYY-MM-DD
   - Example: 2023-09-15

2. **TIME**
   - Format: hh:mm:ss
   - Example: 14:30:00

3. **DATETIME**
   - Format: YYYY-MM-DD hh:mm:ss
   - Example: 2023-09-15 14:30:00
   - Range: 1000-01-01 00:00:00 to 9999-12-31 23:59:59

4. **TIMESTAMP**
   - Same format as DATETIME
   - Range: 1970-01-01 00:00:01 UTC to 2038-01-19 03:14:07 UTC
   - More efficient (4 bytes vs 8 bytes for DATETIME)
   - Better for international use (automatically converts to current time zone)

```sql
-- Example of TIMESTAMP with automatic updates
CREATE TABLE posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP
);
```

> **Best practice**: Use TIMESTAMP for fields that track creation/modification times and DATE for actual calendar dates like birthdays or holidays.

### Common Date/Time Functions
```sql
-- Current date and time
SELECT NOW();  -- YYYY-MM-DD HH:MM:SS
SELECT CURDATE();  -- YYYY-MM-DD
SELECT CURTIME();  -- HH:MM:SS

-- Extract parts of dates
SELECT YEAR('2023-09-15');  -- 2023
SELECT MONTH('2023-09-15');  -- 9
SELECT DAY('2023-09-15');  -- 15

-- Format dates
SELECT DATE_FORMAT('2023-09-15', '%W, %M %d, %Y');  -- Friday, September 15, 2023

-- Date arithmetic
SELECT DATE_ADD('2023-09-15', INTERVAL 1 MONTH);  -- 2023-10-15
SELECT DATEDIFF('2023-09-15', '2023-09-01');  -- 14 (days)
```

## Key Points to Remember

1. **Database Design**:
   - Plan your schema carefully
   - Normalize to reduce redundancy
   - Choose appropriate data types
   - Define relationships clearly

2. **Performance Considerations**:
   - Index frequently queried columns
   - Be cautious with wildcards (`%`) at the beginning of LIKE patterns
   - Limit the use of SELECT * in production code
   - Use EXPLAIN before complex queries to understand execution plan

3. **Data Integrity**:
   - Use constraints to enforce business rules
   - Validate data at the database level when possible
   - Be careful with CASCADE operations on foreign keys

4. **Security Best Practices**:
   - Use parameterized queries to prevent SQL injection
   - Grant minimum necessary privileges to users
   - Encrypt sensitive data
   - Regularly backup your database

5. **Common Pitfalls**:
   - Forgetting WHERE clauses in UPDATE/DELETE statements
   - Not handling NULL values properly
   - Assuming ORDER BY when none is specified
   - Confusing LEFT vs RIGHT joins
   - Neglecting transaction management for multi-step operations

Remember that mastering database concepts requires practice. Try to build small projects that implement these concepts to solidify your understanding.
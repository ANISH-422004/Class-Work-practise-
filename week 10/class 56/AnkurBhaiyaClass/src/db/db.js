const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/kodr")
                                                    .then(()=>{
                                                    console.log("connected to DB");
                                                        
                                                    })
                                                    .catch((err)=>{
                                                    console.log(err);
                                                    
                                                    })


 
const userSchema = new mongoose.Schema({ //creating a schema for the documnets you want store ina specific collection 
    username:String,
    email:String,
    age:Number
})


mongoose.model("users",userSchema)  // creating a  collection called users underwhich userschma wale documents will get stored






// Define the product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],  //required: Ensures that this field is mandatory. If the field is missing, Mongoose will throw a validation error with the custom error message 'Product name is required'.  trim: Removes leading and trailing whitespace from the string before storing it in the database.
    
    trim: true,
  }, 
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0.01, 'Price must be greater than 0'], //min: Specifies the minimum value allowed for the field. If a value less than 0.01 is provided, Mongoose throws a validation error with the message 'Price must be greater than 0'.

  },
  category: {
    type: String,
    enum: {
      values: ['Electronics', 'Clothing', 'Books'],
      message: 'Category must be either Electronics, Clothing, or Books',
    }, //enum: Restricts the value of this field to one of the specified options: 'Electronics', 'Clothing', or 'Books'.
    // If a value outside this list is provided, Mongoose will throw a validation error with the custom message 'Category must be either Electronics, Clothing, or Books'.
    required: [true, 'Product category is required'],
  },
  createdAt: {
    type: Date,  
    //default: Automatically assigns the current date and time (Date.now()) when a new product document is created.
// immutable: Ensures that once the field is set, it cannot be modified. This is useful for fields like createdAt, which should remain constant.
    default: Date.now,
    immutable: true, // Ensures createdAt cannot be modified
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model("Products",productSchema)  

const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://crudapp:crudapp@cluster0.iydyt0r.mongodb.net/?retryWrites=true&w=majority';
// const mongoURI = 'mongodb://localhost:27017/crud';
const mongoURI = 'mongodb+srv://adamfortune084:123qwe@cluster0.o6wvzsw.mongodb.net/crud?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

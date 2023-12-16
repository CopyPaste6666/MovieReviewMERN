/*const mongoose = require('mongoose');
//const DB = process.env.DATABASE;

/*mongoose.connect(DB).then(() => {
    console.log('connection Successful');
  }).catch((err) => console.log('no connection'));
  */
  /*const DB = "mongodb+srv://thangjamnireshwork:abdul@cluster0.himqu7q.mongodb.net/?retryWrites=true&w=majority"
  mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
      console.log('connection Successful');
    }).catch((err) => console.log('no connection'));
    
    mongoose.connection.on('connected', () => {
      console.log('MongoDB connected');
    });
    
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });
    
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    });*/
    

    const mongoose = require('mongoose');

const DB = "mongodb+srv://thangjamnireshwork:abdul@cluster0.himqu7q.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DB).then(() => {
    console.log('connection Successful');
}).catch((err) => console.log('no connection'));

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

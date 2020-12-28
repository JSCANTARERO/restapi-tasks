import mongoose, { connect } from 'mongoose'

(async() => {
    const db = await mongoose.connect('mongodb://localhost/tasksapi', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('========================Database is connectec to:', db.connection.name,'========================');
})();
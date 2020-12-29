import mongoose, { connect } from 'mongoose';
import config from './config'

(async() => {
    const db = await mongoose.connect(config.mongodbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log('========================Database is connectec to:', db.connection.name,'========================');
})();
const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');


const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon');
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {

    const user = await User.findById('60357322b15fc2342c74f96c');
    await user.populate('tasks').execPopulate()
    console.log(user.tasks);
}

main()
const app = require('./server/controller/user.controller');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  // console.log(`Server started on ${PORT}`);
});

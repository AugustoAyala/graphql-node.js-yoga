const mongoose = require("mongoose");

const Url = require("./config").Url;

module.exports = () => {
  mongoose
    .connect(Url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`connected database ${Url}`))
    .catch((err) => console.log(`Connection failed ${err}`));

  process.on("SIGINT", () => {
    console.log(`database disconnected`);
    process.exit(0);
  });
};

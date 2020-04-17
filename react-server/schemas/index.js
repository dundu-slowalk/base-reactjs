const mongoose = require("mongoose");

const NODE_ENV = process.env;
const MONGO_URL = "mongodb://localhost:27017/base-reactjs";

module.exports = () => {
  const connect = () => {
    if (NODE_ENV !== "production") {
      mongoose.set("debug", true);
    }
    mongoose.connect(MONGO_URL, (error) => {
      if (error) {
        console.log("몽고디비 연결 에러", error);
      } else {
        console.log("몽고디비 연결 성공");
      }
    });
  };

  connect();

  mongoose.connection.on("error", (error) => {
    console.error("몽고디비 연결 에러", error);
  });
  mongoose.connection.on("disconnected", () => {
    console.error("몽고디비 연결이 끊겼습니다. 연결을 재시도 합니다.");
    connect();
  });

  require("./user");
  require("./post");
};

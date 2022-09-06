const path = require("path");

function getMessages(req, res) {
  res.render("messages", {
    title: "Messages to my Friends!",
    friend: "Omar",
  });
  // res.sendFile(
  //   path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  // );

  // res.send("<ul><li>Hello Youssef!</li></ul>");
}

function postMessage(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessage,
};

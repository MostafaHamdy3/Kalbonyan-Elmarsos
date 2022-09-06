const model = require("../models/friends.model");

function postFriend(req, res) {
  if (!req.body.name)
    return res.status(400).json({
      error: "Missing friend name",
    });

  const newFriend = {
    id: model.length,
    name: req.body.name,
  };
  model.push(newFriend);

  res.json(newFriend);
}

function getFriends(req, res) {
  res.json(model);
}

function getFriend(req, res) {
  const friendId = +req.params.friendId;
  const friendIndex = model[friendId];
  if (friendIndex) res.status(200).json(friendIndex);
  else
    res.status(404).json({
      error: "Friend doesn't exist",
    });
}

module.exports = {
  postFriend,
  getFriends,
  getFriend,
};

const bcrypt = require("bcryptjs");
const postMent = require("../models/postMent");
const date = require("../utilities/date");
const jwt = require("jsonwebtoken");

const post = (req, res, next) => {
  try {
    const token = req
      .get("Cookie")
      .split("token=")[1]
      .trim();
    const user = jwt.verify(token, "SECRETKEY");
    res.send({
      data: {
        screen: "createdPost",
        username: user.username,
        loginStatus: user.loginStatus
      }
    });
  } catch (error) {
    res.send({
      data: {
        pageName: "Login",
        message: "Plase login"
      }
    });
  }
};
module.exports = post;

const createPost = async postObj => {
  const postment = new postMent({
    postCout: postObj.postCout,
    postBy: postObj.postBy,
    title: postObj.title,
    content: postObj.content,
    tag: postObj.tag,
    created: postObj.created,
    locationPost: postObj.locationPost,
    status: "new",
    like: 0,
    rate: 0,
    view: 0
  });
  const data = await postment.save();
  return data;
};

const postPostMent = (req, res, next) => {
  try {
    const token = req
      .get("Cookie")
      .split("token=")[1]
      .trim();
    const user = jwt.verify(token, "SECRETKEY");

    const postCout = req.body.postCout;
    const postBy = user.username;
    const title = req.body.title;
    const content = req.body.content;
    const category = req.body.category;
    const tag = req.body.tag;
    const created = date();
    const like = 0;
    const status = "new";
    const lat = req.body.lat;
    const long = req.body.long;
    const locationPost = { lat, long };

    const postObj = {
      postCout: postCout,
      postBy: postBy,
      title: title,
      content: content,
      category: category,
      tag: tag,
      created: created,
      like: like,
      status: status,
      locationPost: locationPost
    };

    createPost(postObj)
      .then(rs => {
        res.send({ status: "success", result: rs });
      })
      .catch(err => {
        console.log(`fail   ${err}`);
        res.json({ status: "fail", result: err });
      });
  } catch (error) {
    res.send({
      data: {
        pageName: "Login",
        message: "Plase login"
      }
    });
  }
};

module.exports.postPostMent = postPostMent;

/*
const inPost = (req, res, next) => {
  const postBy = user;
  const title = req.body.title;
  const content = req.body.content;
  const category = req.body.category;
  const tag = req.body.tag;
  const created = date();
  const like = 0;
  const status = "new";
  const lat = req.body.lat;
  const long = req.body.long;
  const location = { lat, long };

  const postObj = {
    postBy: postBy,
    title: title,
    content: content,
    category: category,
    tag: tag,
    created: created,
    like: like,
    status: status,
    location: location
  };

  createPost(postObj)
    .then(rs => {
      res.send(rs);
    })
    .catch(err => {
      res.send(err);
    });
};
module.exports = inPost;
*/

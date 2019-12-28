const express = require("express");
const router = express.Router({ mergeParams: true });
const tags = require("../data/tags");
const fakePosts = require("../data/posts");

// Get a list of tags
router.get("/", (req, res) => {
  res.json(tags);
});

router.get("/:tagId/posts", (req, res) => {
  const postId = Number(req.params.tagId);
  console.log(postId);
  const foundPost = fakePosts.filter(post => post.tag_ids.includes(postId));

  res.json(foundPost);
});

module.exports = router;

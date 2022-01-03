import React, { useEffect } from "react";
import { Paper, Typography, CircularProgress, Divider, Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";

import useStyles from "./styles";
import { getPost, getPostsBySearch } from "../../actions/posts";

const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(getPostsBySearch({ search: "none", tags: post?.tags.join(",") }));
    }
  }, [post]);

  if (!post) return null;

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const openPost = (_id) => navigate(`/posts/${_id}`);

  const recomendedPosts = posts.filter(({ _id }) => _id !== post._id).slice(0, 5);

  const openMessage = (message) => {
    const max = 100;

    let str = message;
    let total = message.length;

    // str = str <= max ? str : str.substring(0, max + 1);
    if (total <= max) {
      return str;
    } else {
      str = str.substring(0, max + 1) + "... ";

      return (
        <>
          {str}
          <Typography variant="body2" color="primary" component="span">
            click for more detail
          </Typography>
        </>
      );
    }
  };

  return (
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {post.title}
          </Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {post.message}
          </Typography>
          <Typography variant="h6">Created by: {post.name}</Typography>
          <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Typography variant="body1">
            <strong>Realtime Chat - coming soon!</strong>
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Typography variant="body1">
            <strong>Comments - coming soon!</strong>
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={post.selectedFile || "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"} alt={post.title} />
        </div>
      </div>
      {recomendedPosts.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">
            You might also like :
          </Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recomendedPosts.map(({ title, message, name, likes, selectedFile, _id }) => (
              <div key={_id} className={classes.recommendedItems} style={{ margin: "10px 20px 0", cursor: "pointer", boxSizing: "border-box" }} onClick={() => openPost(_id)}>
                <Typography gutterBottom variant="h6">
                  {title}
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                  {name}
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                  {openMessage(message)}
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  Likes : {likes.length}
                </Typography>
                <img src={selectedFile} width="200" />
              </div>
            ))}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default PostDetails;

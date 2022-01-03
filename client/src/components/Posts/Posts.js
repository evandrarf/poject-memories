import React, { useEffect } from "react";
import { Grid, CircularProgress, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import Post from "./Post/Post";

import useStyles from "./style";
import { getPosts } from "../../actions/posts";

const Posts = ({ setCurrentId, page }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (posts) dispatch(getPosts(page));
  // }, [posts]);

  if (!posts.length && !isLoading) return <Typography variant="h4">No Posts</Typography>;

  return isLoading ? (
    <div className={classes.loadingContainer}>
      <CircularProgress className={classes.progress} />
    </div>
  ) : (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={6} lg={4}>
          <Post post={post} page={page} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;

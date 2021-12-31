import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";

import { Container, Grow, Grid } from "@material-ui/core";

import useStyles from "../../style";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";

const Home = ({ user, setUser }) => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
          <Grid item sm={12} md={8}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item sm={12} md={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} user={user} setUser={setUser} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from "@material-ui/core";
import ChipInput from "material-ui-chip-input";

import { getPosts, getPostsBySearch } from "../../actions/posts";
import useStyles from "./style";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import Pagination from "../Pagination";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = ({ user, setUser }) => {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();
  const query = useQuery();
  const navigate = useNavigate();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      navigate(`/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`);
    } else {
      navigate("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      searchPost();
    }
  };

  const handleAdd = (tag) => setTags([...tags, tag]);

  const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={9} md={9}>
            <Posts page={page} setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={9} md={3}>
            <AppBar className={classes.appBarSearch} position="static" color="inherit">
              <TextField name="search" variant="outlined" label="Search Memories" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} onKeyPress={handleKeyPress} />
              <ChipInput style={{ margin: "10px 0" }} value={tags} onDelete={handleDelete} onAdd={handleAdd} label="Search Tags" variant="outlined" />
              <Button onClick={searchPost} className={classes.searchButton} color="primary" variant="contained">
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} page={page} setCurrentId={setCurrentId} user={user} setUser={setUser} />
            <Paper className={classes.pagination} elevation={6}>
              {!searchQuery && !tags.length && <Pagination className={classes.pagination} page={page} />}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;

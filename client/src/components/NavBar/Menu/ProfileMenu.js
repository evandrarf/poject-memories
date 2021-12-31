import React from "react";
import { Paper, Avatar, Button, Typography, Popover, Grid, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import useStyle from "./style";

const ProfileMenu = ({ user, logout }) => {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Button aria-describedby={id} className={classes.menuButton} onClick={handleClick}>
        <MenuIcon className={classes.menu} fontSize="large" />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Paper className={classes.paper}>
          <Grid container direction="column" spacing={1}>
            {user?.result ? (
              <>
                <Grid container item justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
                      {user.result.name.charAt(0).toUpperCase()}
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.userName} variant="body1">
                      {user.result.name}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" className={classes.logout} fullWidth color="secondary" onClick={logout}>
                    Log Out
                  </Button>
                </Grid>
              </>
            ) : (
              <Grid item xs={12}>
                <Button component={Link} to="/auth" variant="contained" fullWidth color="primary">
                  Sign In
                </Button>
              </Grid>
            )}
          </Grid>
        </Paper>
      </Popover>
    </>
  );
};

export default ProfileMenu;

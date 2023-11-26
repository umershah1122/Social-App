import {
  Mail,
  Notifications,
  SearchOff,
  SearchOffOutlined,
  SportsSoccer,
} from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const ToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    color: "black",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: { display: "flex" },
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: { display: "none" },
  }));
  return (
    <AppBar sx={{ position: "sticky", mb: 1 }}>
      <ToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Social App
        </Typography>
        <SportsSoccer sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={3} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={5} color="error">
            <Notifications />
          </Badge>

          <Avatar
            src="https://material-ui.com/static/images/avatar/1.jpg"
            alt="img not found"
            sx={{ width: "30px", height: "30px" }}
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            src="https://material-ui.com/static/images/avatar/1.jpg"
            alt="img not found"
            sx={{ width: "30px", height: "30px" }}
          />
          <Typography variant="span">Social App</Typography>
        </UserBox>
      </ToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={(e) => setOpen(false)}>Profile</MenuItem>
        <MenuItem onClick={(e) => setOpen(false)}>My account</MenuItem>
        <MenuItem onClick={(e) => setOpen(false)}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;

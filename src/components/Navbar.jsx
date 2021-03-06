import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { stringAvatar } from "../utils/getAvatarString";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { setToken } from "../store/slice/auth";

export function Navbar({ title, rightContent, ...rest }) {
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <AppBar position="sticky" {...rest}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <div>
          {rightContent}
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <Avatar size="small" {...stringAvatar(currentUser.email)} />
            <MenuItem onClick={() => dispatch(setToken(null))}>logout</MenuItem>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

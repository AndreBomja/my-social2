import { Notifications } from '@mui/icons-material';
import LocalConvenienceStore from "@mui/icons-material/LocalConvenienceStore";
import Mail from '@mui/icons-material/Mail';
import { AppBar, Box, InputBase, Toolbar } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { React, useState } from "react";



const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  [theme.breakpoints.up("xs")]:{
    display:"flex",
  },
  [theme.breakpoints.up("sm")]:{
    display:"flex",
  },

}));

const Icons = styled(Box)(({ theme }) => ({
  display:"none", 
  alignItems: "center", 
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:"flex",
  }
}));
const UserBox = styled(Box)(({ theme }) => ({
  display:"flex", 
  alignItems: "center", 
  gap:"10px",
  [theme.breakpoints.up("sm")]:{
    display:"none", 
  }
}));
const Navbar = () => {

  const [open, close] = useState(false)

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Bomja
        </Typography>
        <LocalConvenienceStore sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Pesquisar..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail  />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar 
          sx={{width:30, height:30}}
          alt="Remy Sharp" src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          onClick={e=>close(true)}
          />
        </Icons>
        <UserBox onClick={e=>close(true)}>
        <Avatar 
          sx={{width:30, height:30}}
          alt="Remy Sharp" src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        <Typography variant="span">Andre Bomjardim</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>close(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;

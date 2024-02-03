import React from "react";
import logo from "../../assets/images/logo.jpg";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
  };

  const navigate = useNavigate();
  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5">
          <img src={logo} alt="logo" height={"30px"} width={"30px"} />
        </div>
        <div className="space-y-6">
          {navigationMenu.map((navigateItem) => {
            return (
              <div
                className="cursor-pointer flex space-x-3 item-center"
                onClick={() =>
                  navigateItem.title === "Profile"
                    ? navigate(`/profile/${5}`)
                    : navigate(navigateItem.path)
                }
              >
                {navigateItem.icon}
                <p className="text-x1">{navigateItem.title}</p>
              </div>
            );
          })}
        </div>
        <div className="py-10">
          <Button
            sx={{
              width: "50%",
              borderRadius: "29px",
              py: "15px",
              bgcolor: "#1e88e5",
            }}
            variant="contained"
          >
            Tweet
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar
            alt="username"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5QX51-SXSdd_3NLB1hK4KR0lQrkoKlPsPRG8f18ODpBbLovPMJ_L9z55JCbBo9TrCduw&usqp=CAU"
          />
          <div className="flex flex-col ">
            <span>Ron Ran</span>
            <span className="opacity-70">@ronran</span>
          </div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ float: "right" }}
          >
            <MoreHorizIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

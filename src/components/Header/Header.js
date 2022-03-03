import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Grid,
    Typography,
} from "@mui/material";

import NavBar from "../NavBar/NavBar";

import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

function Header() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const anchor = "left";

    const items = [
        "치잉이란?",
        "치잉코스",
        "테마활동",
        "참가하기",
        "활동리뷰",
        "FAQ",
    ];

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
                fontFamily: "NanumSquareRound",
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {items.map((text, index) => (
                    <Link
                        key={index}
                        to={`/${index}`}
                        style={{ textDecoration: "none", color: "#eeeeee" }}
                    >
                        <ListItem button key={text} sx={{ padding: "3vw" }}>
                            {text}
                        </ListItem>
                        <Divider
                            sx={{
                                borderColor: "#ffffff22",
                            }}
                        ></Divider>
                    </Link>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {matches ? (
                <div>
                    <Box
                        sx={{
                            textAlign: "center",
                            height: 200,
                            backgroundImage: `url(${"/assets/images/common/brick_bg.png"})`,
                            width: "100vw",
                        }}
                    >
                        <Link to={`/`}>
                            <img src="/assets/images/common/logo/logo.png"></img>
                        </Link>
                    </Box>
                    <NavBar items={items} />
                </div>
            ) : (
                <Box>
                    <AppBar
                        position="static"
                        sx={{ backgroundColor: "#000000", width: "100vw" }}
                    >
                        <Toolbar>
                            <Grid container>
                                <Grid item xs={4}>
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="menu"
                                        sx={{
                                            mr: 2,
                                            height: "100%",
                                            paddingTop: "4vw",
                                        }}
                                        onClick={toggleDrawer(anchor, true)}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Drawer
                                        anchor={anchor}
                                        open={state[anchor]}
                                        onClose={toggleDrawer(anchor, false)}
                                        PaperProps={{
                                            sx: {
                                                backgroundColor: "#222222",
                                                color: "#eeeeee",
                                                padding: "2vw",
                                            },
                                        }}
                                    >
                                        {list(anchor)}
                                    </Drawer>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box
                                        sx={{
                                            textAlign: "center",
                                            justifyContent: "center",
                                            width: "100%",
                                        }}
                                    >
                                        <Link
                                            to={`/`}
                                            style={{ textDecoration: "none" }}
                                        >
                                            {/* <img
                                                style={{
                                                    width: "17vw",
                                                    paddingTop: "4vw",
                                                    height: "100%",
                                                }}
                                                src="/assets/images/common/logo/logo_small.png"
                                            ></img> */}
                                            <Typography
                                                component="div"
                                                sx={{
                                                    color: "#ffffff",
                                                    fontFamily:
                                                        "GmarketSansBold",
                                                    fontWeight: "bold",
                                                    fontSize: "1rem",
                                                    padding: "3vw",
                                                    textAlign: "center",
                                                }}
                                            >
                                                CHEER ENGLISH
                                            </Typography>
                                        </Link>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}></Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Box>
            )}
        </div>
    );
}

export default Header;

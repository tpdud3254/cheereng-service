import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, AppBar, Toolbar, IconButton, Grid } from "@mui/material";

import NavBar from "../NavBar/NavBar";

import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import styled from "styled-components";

const HeaderContainer = styled.div`
    flex-direction: column;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-image: url("/assets/images/common/brick_bg2.jpg");
`;

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
                <HeaderContainer>
                    <Link to={`/`}>
                        <picture>
                            <source
                                type="image/webp"
                                srcSet="/assets/images/common/logo/logo2.webp"
                            />
                            <img src="/assets/images/common/logo/logo2.png" />
                        </picture>
                    </Link>
                    <NavBar items={items} />
                </HeaderContainer>
            ) : (
                <Box>
                    <AppBar
                        position="static"
                        sx={{ backgroundColor: "#000000", width: "100vw" }}
                    >
                        <Toolbar>
                            <Grid container>
                                <Grid item xs={2}>
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="menu"
                                        sx={{
                                            mr: 2,
                                            height: "100%",
                                            width: "60px",
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
                                <Grid item xs={8}>
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
                                            <picture>
                                                <source
                                                    type="image/webp"
                                                    srcSet="/assets/images/common/logo/logo_small2.webp"
                                                />
                                                <img
                                                    style={{
                                                        width: "40vw",
                                                        padding: 10,
                                                        paddingTop: 15,
                                                    }}
                                                    src="/assets/images/common/logo/logo_small2.png"
                                                />
                                            </picture>
                                        </Link>
                                    </Box>
                                </Grid>
                                <Grid item xs={2}></Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Box>
            )}
        </div>
    );
}

export default Header;

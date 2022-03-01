import { Box, Stack } from "@mui/material";
import { useState } from "react";
import NavItem from "./NavItem";
import { useLocation } from "react-router-dom";

function NavBar() {
    const items = [
        "치잉이란?",
        "치잉코스",
        "테마활동",
        "참가하기",
        "활동리뷰",
        "FAQ",
    ];

    const location = useLocation().pathname;

    return (
        <Box
            sx={{
                textAlign: "center",
                height: 55,
                backgroundImage: `url(${"/assets/images/navbar_bg2.png"})`,
                borderBottom: "2px solid #ffffff33",
            }}
        >
            <Box
                sx={{
                    height: 55,
                    backgroundColor: "#00000044",
                }}
            >
                <Stack
                    spacing={15}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ height: 55 }}
                >
                    {items.map((item, index) => (
                        <NavItem
                            key={item}
                            id={index}
                            title={item}
                            select={location == `/${index}` ? true : false}
                        />
                    ))}
                </Stack>
            </Box>
        </Box>
    );
}

export default NavBar;

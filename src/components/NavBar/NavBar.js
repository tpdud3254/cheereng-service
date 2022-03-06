import NavItem from "./NavItem";
import { Box, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";

function NavBar({ items }) {
    const location = useLocation().pathname;

    return (
        <Box
            sx={{
                textAlign: "center",
                backgroundImage: `url(${"/assets/images/common/navbar_bg.png"})`,
                borderBottom: "2px solid #ffffff33",
                width: "100vw",
            }}
        >
            <Box
                sx={{
                    backgroundColor: "#00000044",
                }}
            >
                <Stack
                    spacing={12}
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

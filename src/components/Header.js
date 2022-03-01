import { Box } from "@mui/material";
import NavBar from "./NavBar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <div>
            {matches ? (
                <div>
                    <Box
                        sx={{
                            textAlign: "center",
                            height: 200,
                            backgroundImage: `url(${"/assets/images/common/brick_bg.png"})`,
                        }}
                    >
                        <Link to={`/`}>
                            <img src="/assets/images/common/logo/logo.png"></img>
                        </Link>
                    </Box>
                    <NavBar />
                </div>
            ) : null}
        </div>
    );
}

export default Header;

import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
function Reason() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <Box
            sx={{
                textAlign: "center",
                backgroundColor: "#000000",
                backgroundImage: `url(${"/assets/images/main/reason/reason_bg.png"})`,
                backgroundSize: "contain",
                width: "100vw",
            }}
        >
            <img
                loading="lazy"
                src={`/assets/images/main/reason/${
                    matches ? "reason" : "reason_m"
                }.png`}
                style={{
                    width: matches ? "80%" : "98%",
                    margin: matches ? "6vw" : "",
                    marginTop: matches ? "" : "6vw",
                    marginBottom: matches ? "" : "6vw",
                }}
            ></img>
        </Box>
    );
}

export default Reason;

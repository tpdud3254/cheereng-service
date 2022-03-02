import { Box } from "@mui/material";
function Reason() {
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
                src="/assets/images/main/reason/reason.png"
                style={{ width: "90%", margin: "6vw" }}
            ></img>
        </Box>
    );
}

export default Reason;

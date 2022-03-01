import { Box } from "@mui/material";
function Reason() {
    return (
        <Box
            sx={{
                textAlign: "center",
                backgroundColor: "#000000",
                backgroundImage: `url(${"/assets/images/main/reason/reason_bg.png"})`,
                backgroundSize: "contain",
                padding: 10,
            }}
        >
            <img
                loading="lazy"
                src="/assets/images/main/reason/reason.png"
            ></img>
        </Box>
    );
}

export default Reason;

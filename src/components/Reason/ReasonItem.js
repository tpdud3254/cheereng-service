import { Stack, Typography } from "@mui/material";

function ReasonItem({ title, text, imgUrl, id }) {
    return (
        <Stack spacing={"1vw"} justifyContent="center" alignItems="center">
            <Typography
                component="div"
                sx={{
                    color: "#fff379",
                    fontFamily: "ROKAFSansBold",
                    fontSize: "1.8rem",
                }}
            >
                0{id + 1}
            </Typography>

            <Typography
                component="div"
                sx={{
                    color: "#ffffff",
                    fontFamily: "Cafe24Ohsquareair",
                    fontSize: "5vw",
                }}
            >
                {title}
            </Typography>

            <img
                loading="lazy"
                src={imgUrl}
                style={{ width: "100%", paddingTop: 20 }}
            ></img>

            <Typography
                component="div"
                sx={{
                    color: "#ffffff",
                    fontFamily: "S-CoreDream-3Light",
                    fontSize: "3.5vw",
                    padding: 3,
                }}
            >
                {text.split("\n").map((line, i) => {
                    return (
                        <span key={i}>
                            {line}
                            <br />
                        </span>
                    );
                })}
            </Typography>
        </Stack>
    );
}

export default ReasonItem;

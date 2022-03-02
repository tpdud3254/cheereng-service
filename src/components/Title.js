import { Typography } from "@mui/material";

function Title({ text, textColor }) {
    const style = {
        color: "#999999",
    };
    return (
        <Typography
            variant="h5"
            component="div"
            sx={{
                color: textColor ? textColor : "#ffffff",
                fontFamily: "SEBANG_Gothic_Bold",
                fontSize: "1.6vw",
                paddingBottom: "4vw",
            }}
        >
            <span style={style}>[</span>&nbsp;{text}&nbsp;
            <span style={style}>]</span>
        </Typography>
    );
}

export default Title;

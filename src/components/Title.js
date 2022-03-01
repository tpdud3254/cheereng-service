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
                paddingBottom: 8,
            }}
        >
            <span style={style}>[</span>&nbsp;{text}&nbsp;
            <span style={style}>]</span>
        </Typography>
    );
}

export default Title;

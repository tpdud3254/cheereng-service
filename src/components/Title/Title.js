import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Title({ text, textColor, textSize, bottom, fontFamily }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const style = {
        color: "#999999",
    };
    return (
        <Typography
            component="div"
            sx={{
                color: textColor ? textColor : "#ffffff",
                fontFamily: fontFamily ? fontFamily : "SEBANG_Gothic_Bold",
                fontSize: textSize ? textSize : "1.5rem",
                paddingBottom: bottom ? bottom : matches ? "4vw" : "6vw",
            }}
        >
            <span style={style}>[</span>&nbsp;{text}&nbsp;
            <span style={style}>]</span>
        </Typography>
    );
}

export default Title;

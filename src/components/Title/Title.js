import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Title({ text, textColor }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
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
                fontSize: matches ? "1.6vw" : "6vw",
                paddingBottom: matches ? "4vw" : "6vw",
            }}
        >
            <span style={style}>[</span>&nbsp;{text}&nbsp;
            <span style={style}>]</span>
        </Typography>
    );
}

export default Title;

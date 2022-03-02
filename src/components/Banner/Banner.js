import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./style.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <AwesomeSlider bullets={false} fillParent={false} className="aws-btn">
            <div
                style={{ width: "100vw" }}
                data-src="/assets/images/main/banner/Banner1_2.png"
            />
            <div
                style={{ width: "100vw" }}
                data-src="/assets/images/main/banner/Banner2_2.png"
            />
        </AwesomeSlider>
    );
}

export default Banner;

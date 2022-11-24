import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./style.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <AwesomeSlider bullets={false} fillParent={false} className="aws-btn">
            <div
                style={{
                    width: "100vw",
                    margin: matches ? "1vw auto" : "",
                    textAlign: "center",
                }}
                children={
                    <Link to={`/3`} style={{ textDecoration: "none" }}>
                        <picture>
                            <source
                                type="image/webp"
                                srcSet={`/assets/images/main/banner/Banner1_2${
                                    matches ? "" : "_m"
                                }.webp`}
                            />
                            <img
                                src={`/assets/images/main/banner/Banner1_2${
                                    matches ? "" : "_m"
                                }.jpg`}
                                style={{ width: matches ? "83%" : "99%" }}
                            />
                        </picture>
                    </Link>
                }
            />
            <div
                style={{
                    width: "100vw",
                    margin: matches ? "1vw auto" : "",
                    textAlign: "center",
                }}
                children={
                    <Link to={`/3`} style={{ textDecoration: "none" }}>
                        <picture>
                            <source
                                type="image/webp"
                                srcSet={`/assets/images/main/banner/Banner2_2${
                                    matches ? "" : "_m"
                                }.webp`}
                            />
                            <img
                                src={`/assets/images/main/banner/Banner2_2${
                                    matches ? "" : "_m"
                                }.jpg`}
                                style={{ width: matches ? "83%" : "99%" }}
                            />
                        </picture>
                    </Link>
                }
            />
            <div
                style={{
                    width: "100vw",
                    margin: matches ? "1vw auto" : "",
                    textAlign: "center",
                }}
                children={
                    <Link to={`/3`} style={{ textDecoration: "none" }}>
                        <picture>
                            <source
                                type="image/webp"
                                srcSet={`/assets/images/main/banner/Banner3_2${
                                    matches ? "" : "_m"
                                }.webp`}
                            />
                            <img
                                src={`/assets/images/main/banner/Banner3_2${
                                    matches ? "" : "_m"
                                }.jpg`}
                                style={{ width: matches ? "83%" : "99%" }}
                            />
                        </picture>
                    </Link>
                }
            />
        </AwesomeSlider>
    );
}

export default Banner;

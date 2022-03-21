import { Box, ImageList, ImageListItem } from "@mui/material";
import Title from "../Title/Title";
import { imgList, mobileImgList } from "./imageList";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect } from "react";
function Gallary() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Box
            sx={{
                textAlign: "center",
                backgroundColor: "#ebe7e4",
                backgroundImage: `url(${"/assets/images/common/paper_bg.jpg"})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                padding: matches ? "5vw" : "10vw",
                paddingLeft: "10vw",
                paddingRight: "10vw",
            }}
        >
            <Title text="치얼잉글리쉬 갤러리" textColor="#000000" />

            <Box
                sx={{
                    textAlign: "center",
                    backgroundColor: "#ffffff99",
                    padding: "1vw",
                }}
            >
                {matches ? (
                    <ImageList variant="masonry" cols={3} gap={5}>
                        {imgList.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    loading="lazy"
                                    src={item.img}
                                    alt={item.title}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                ) : (
                    <div>
                        <ImageList variant="masonry" cols={2} gap={5}>
                            {mobileImgList.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        loading="lazy"
                                        src={item.img}
                                        alt={item.title}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>{" "}
                        <a
                            href="https://www.instagram.com/cheereng_/"
                            target="_blank"
                        >
                            <img
                                style={{ margin: "0.5vw", width: "5vw" }}
                                src="/assets/images/common/arrow.png"
                            />
                        </a>
                    </div>
                )}
            </Box>
        </Box>
    );
}

export default Gallary;

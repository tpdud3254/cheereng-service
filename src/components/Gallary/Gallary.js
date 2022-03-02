import { Box, ImageList, ImageListItem } from "@mui/material";
import Title from "../Title/Title";
import { imgList } from "./imageList";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect } from "react";
function Gallary() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    console.log(imgList);
    return (
        <Box
            sx={{
                textAlign: "center",
                backgroundColor: "#ebe7e4",
                backgroundImage: `url(${"/assets/images/common/paper_bg.jpg"})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                padding: "5vw",
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
                <ImageList variant="masonry" cols={matches ? 3 : 2} gap={5}>
                    {imgList.map((item, index) =>
                        !matches && index === imgList.length - 1 ? null : (
                            <ImageListItem key={item.img}>
                                <img
                                    loading="lazy"
                                    src={item.img}
                                    alt={item.title}
                                />
                            </ImageListItem>
                        )
                    )}
                </ImageList>
            </Box>
        </Box>
    );
}

export default Gallary;

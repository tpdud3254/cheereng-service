import { Box, ImageList, ImageListItem } from "@mui/material";
import Title from "../Title";

function Gallary() {
    const itemData = [
        {
            img: "/assets/images/main/gallary/6.jpg",
            title: "6",
        },
        {
            img: "/assets/images/main/gallary/7.jpg",
            title: "7",
        },
        {
            img: "/assets/images/main/gallary/2.jpg",
            title: "2",
        },
        {
            img: "/assets/images/main/gallary/4.jpg",
            title: "4",
        },
        {
            img: "/assets/images/main/gallary/1.jpg",
            title: "1",
        },
        {
            img: "/assets/images/main/gallary/9.jpg",
            title: "9",
        },
        {
            img: "/assets/images/main/gallary/5.jpg",
            title: "5",
        },
        {
            img: "/assets/images/main/gallary/8.jpg",
            title: "8",
        },
        {
            img: "/assets/images/main/gallary/3.jpg",
            title: "3",
        },
    ];

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
                <ImageList variant="masonry" cols={3} gap={"1vw"}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                loading="lazy"
                                src={item.img}
                                alt={item.title}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Box>
    );
}

export default Gallary;

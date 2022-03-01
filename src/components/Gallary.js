import { Box, ImageList, ImageListItem } from "@mui/material";
import Title from "./Title";

function Gallary() {
    const itemData = [
        {
            img: "/assets/images/gallary/6.jpg",
            title: "6",
        },
        {
            img: "/assets/images/gallary/7.jpg",
            title: "7",
        },
        {
            img: "/assets/images/gallary/2.jpg",
            title: "2",
        },
        {
            img: "/assets/images/gallary/4.jpg",
            title: "4",
        },
        {
            img: "/assets/images/gallary/1.jpg",
            title: "1",
        },
        {
            img: "/assets/images/gallary/9.jpg",
            title: "9",
        },
        {
            img: "/assets/images/gallary/5.jpg",
            title: "5",
        },
        {
            img: "/assets/images/gallary/8.jpg",
            title: "8",
        },
        {
            img: "/assets/images/gallary/3.jpg",
            title: "3",
        },
    ];

    return (
        <Box
            sx={{
                textAlign: "center",
                backgroundColor: "#ebe7e4",
                backgroundImage: `url(${"/assets/images/gallary_bg.png"})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                padding: 10,
                paddingLeft: 20,
                paddingRight: 20,
            }}
        >
            <Title text="치얼잉글리쉬 갤러리" textColor="#000000" />

            <Box
                sx={{
                    textAlign: "center",
                    backgroundColor: "#ffffff99",
                    padding: 2,
                }}
            >
                <ImageList variant="masonry" cols={3} gap={13}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img src={item.img} alt={item.title} />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Box>
    );
}

export default Gallary;

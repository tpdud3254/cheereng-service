import { Box, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function Review() {
    const itemData = [
        {
            img: "/assets/images/review/img6.jpg",
            title: "img6",
        },
        {
            img: "/assets/images/review/img7.jpg",
            title: "img7",
        },
        {
            img: "/assets/images/review/img8.jpg",
            title: "img8",
        },
        {
            img: "/assets/images/review/img1.jpg",
            title: "img1",
        },
        {
            img: "/assets/images/review/img2.jpg",
            title: "img2",
        },
        {
            img: "/assets/images/review/img3.jpg",
            title: "img3",
        },
        {
            img: "/assets/images/review/img4.jpg",
            title: "img4",
        },
        {
            img: "/assets/images/review/img5.jpg",
            title: "img5",
        },
    ];

    return (
        <Box
            sx={{
                backgroundColor: "#000000",
                backgroundImage: `url(${"/assets/images/review_bg.jpg"})`,
                padding: 10,
                textAlign: "center",
            }}
        >
            <Typography
                sx={{
                    backgroundColor: "#ffe57f",
                    textAlign: "center",
                    fontSize: "1.2vw",
                    display: "inline",
                    padding: 0.5,
                    paddingLeft: 6,
                    paddingRight: 6,
                    borderRadius: 10,
                    color: "#bd5757",
                    fontFamily: "nanumgothic",
                    fontWeight: "bold",
                }}
            >
                치어와 학생의 리얼 대화!
            </Typography>

            <Typography
                sx={{
                    textAlign: "center",
                    fontSize: "4vw",
                    color: "#4e4e4e",
                    fontFamily: "Cafe24Ssurround",
                }}
            >
                생생카톡후기
            </Typography>

            <Box
                sx={{
                    textAlign: "center",
                    backgroundColor: "#ffffff99",
                    padding: 4,
                }}
            >
                <ImageList variant="masonry" cols={3} gap={10}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={item.img}
                                alt={item.title}
                                sx={{ objectFit: "contain" }}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Box>
    );
}

export default Review;

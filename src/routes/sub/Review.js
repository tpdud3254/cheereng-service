import { Box, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
function Review() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const itemData = [
        {
            img: "/assets/images/sub/review/img8.jpg",
            title: "img8",
        },
        {
            img: "/assets/images/sub/review/img10.jpg",
            title: "img10",
        },
        {
            img: "/assets/images/sub/review/img4.jpg",
            title: "img4",
        },
        {
            img: "/assets/images/sub/review/img2.jpg",
            title: "img2",
        },
        {
            img: "/assets/images/sub/review/img6.jpg",
            title: "img6",
        },
        {
            img: "/assets/images/sub/review/img1.jpg",
            title: "img1",
        },
        {
            img: "/assets/images/sub/review/img3.jpg",
            title: "img3",
        },
        {
            img: "/assets/images/sub/review/img12.jpg",
            title: "img12",
        },
        {
            img: "/assets/images/sub/review/img7.jpg",
            title: "img7",
        },
        {
            img: "/assets/images/sub/review/img5.jpg",
            title: "img5",
        },
        {
            img: "/assets/images/sub/review/img9.jpg",
            title: "img9",
        },
        {
            img: "/assets/images/sub/review/img11.jpg",
            title: "img11",
        },
    ];

    return (
        <Box
            sx={{
                backgroundColor: "#000000",
                backgroundImage: `url(${"/assets/images/sub/review/review_bg.jpg"})`,
                backgroundSize: "contain",
                padding: matches ? "5vw" : "",
                paddingTop: matches ? "" : "10vw",
                paddingBottom: matches ? "" : "10vw",
                textAlign: "center",
            }}
        >
            <Typography
                sx={{
                    backgroundColor: "#ffe57f",
                    textAlign: "center",
                    fontSize: matches ? "1.2vw" : "4vw",
                    display: "inline",
                    padding: "0.2vw",
                    paddingLeft: matches ? "2.5vw" : "5vw",
                    paddingRight: matches ? "2.5vw" : "5vw",
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
                    fontSize: matches ? "4vw" : "10vw",
                    color: "#4e4e4e",
                    fontFamily: "Cafe24Ssurround",
                    marginBottom: matches ? "" : "4vw",
                }}
            >
                생생카톡후기
            </Typography>

            <Box
                sx={{
                    textAlign: "center",
                    backgroundColor: "#ffffff99",
                    padding: "1.8vw",
                }}
            >
                <ImageList
                    variant="masonry"
                    cols={matches ? 3 : 1}
                    gap={matches ? 10 : 50}
                >
                    {itemData.map((item, index) => (
                        <ImageListItem key={item.img}>
                            {matches ? null : (
                                <ImageListItemBar
                                    position="below"
                                    title={`0${index + 1}`}
                                    sx={{
                                        color: "#ffc438",
                                        fontFamily: "Cafe24Ssurround",
                                        fontSize: "10vw",
                                    }}
                                />
                            )}
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

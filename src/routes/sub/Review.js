import { Box, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
function Review() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    // const [sorted, setSorted] = useState(false);

    const itemData2 = [
        {
            img: "/assets/images/sub/review/img1.jpg",
            title: "img1",
        },
        {
            img: "/assets/images/sub/review/img2.jpg",
            title: "img2",
        },
        {
            img: "/assets/images/sub/review/img3.jpg",
            title: "img3",
        },
        {
            img: "/assets/images/sub/review/img4.jpg",
            title: "img4",
        },
        {
            img: "/assets/images/sub/review/img5.jpg",
            title: "img5",
        },
        {
            img: "/assets/images/sub/review/img6.jpg",
            title: "img6",
        },
        {
            img: "/assets/images/sub/review/img7.jpg",
            title: "img7",
        },
        {
            img: "/assets/images/sub/review/img8.jpg",
            title: "img8",
        },
        {
            img: "/assets/images/sub/review/img9.jpg",
            title: "img9",
        },
        {
            img: "/assets/images/sub/review/img10.jpg",
            title: "img10",
        },
        {
            img: "/assets/images/sub/review/img11.jpg",
            title: "img11",
        },
        {
            img: "/assets/images/sub/review/img12.jpg",
            title: "img12",
        },
        {
            img: "/assets/images/sub/review/img13.jpg",
            title: "img13",
        },
        {
            img: "/assets/images/sub/review/img14.jpg",
            title: "img14",
        },
        {
            img: "/assets/images/sub/review/img15.jpg",
            title: "img15",
        },
        {
            img: "/assets/images/sub/review/img16.jpg",
            title: "img16",
        },
        {
            img: "/assets/images/sub/review/img17.jpg",
            title: "img17",
        },
        {
            img: "/assets/images/sub/review/img18.jpg",
            title: "img18",
        },
        {
            img: "/assets/images/sub/review/img19.jpg",
            title: "img19",
        },
        {
            img: "/assets/images/sub/review/img20.jpg",
            title: "img20",
        },
        {
            img: "/assets/images/sub/review/img21.jpg",
            title: "img21",
        },
        {
            img: "/assets/images/sub/review/img22.jpg",
            title: "img22",
        },
        {
            img: "/assets/images/sub/review/img23.jpg",
            title: "img23",
        },
        {
            img: "/assets/images/sub/review/img24.jpg",
            title: "img24",
        },
        {
            img: "/assets/images/sub/review/img25.jpg",
            title: "img25",
        },
        {
            img: "/assets/images/sub/review/img26.jpg",
            title: "img26",
        },
        {
            img: "/assets/images/sub/review/img27.jpg",
            title: "img27",
        },
        {
            img: "/assets/images/sub/review/img28.jpg",
            title: "img28",
        },
        {
            img: "/assets/images/sub/review/img29.jpg",
            title: "img29",
        },
        {
            img: "/assets/images/sub/review/img30.jpg",
            title: "img30",
        },
        {
            img: "/assets/images/sub/review/img31.jpg",
            title: "img31",
        },
        {
            img: "/assets/images/sub/review/img32.jpg",
            title: "img32",
        },
        {
            img: "/assets/images/sub/review/img33.jpg",
            title: "img33",
        },
        {
            img: "/assets/images/sub/review/img34.jpg",
            title: "img34",
        },
        {
            img: "/assets/images/sub/review/img35.jpg",
            title: "img35",
        },
        {
            img: "/assets/images/sub/review/img36.jpg",
            title: "img36",
        },
    ];

    const [resultArr, setResultArr] = useState([]);

    useEffect(() => {
        const dataArr = [];
        setResultArr([]);

        // for (let i = 0; i < 37; i++) {
        //     itemData.push({
        //         img: `/assets/images/sub/review/img${i + 1}.jpg`,
        //         title: `img${i + 1}`,
        //     });
        // }
        // console.log(itemData);

        itemData2.forEach((item, index) => {
            const img = new Image();
            img.src = item.img;
            dataArr[index] = {
                title: item.title,
                height: img.height,
                src: item.img,
            };

            if (index === itemData2.length - 1) {
                callback();
            }
        });

        function callback() {
            //오름차순으로 정렬
            for (let i = dataArr.length - 1; i > 0; i--) {
                for (let j = 0; j < i; j++) {
                    if (dataArr[j].height > dataArr[j + 1].height) {
                        const tmp = dataArr[j];
                        dataArr[j] = dataArr[j + 1];
                        dataArr[j + 1] = tmp;
                    }
                }
            }
            console.log(dataArr);

            //배열을 3개 씩 묶는다고 가정했을 때 짝수 묶음의 맨 앞과 맨 뒤의 데이터를 바꿔줌
            for (let i = 1; i <= dataArr.length / 3; i++) {
                if (i % 2 === 0) {
                    const index = i + 1 + 4 * (i / 2 - 1);
                    const tmp = dataArr[index];
                    dataArr[index] = dataArr[index + 2];
                    dataArr[index + 2] = tmp;
                }
            }

            console.log(dataArr);

            // ImageList는 배열에서의 행렬 개념과 반대이므로 행을 열로 바꿔준다
            for (let j = 0; j < 3; j++) {
                for (let i = 0; i < dataArr.length / 3; i++) {
                    const index = i + j + 2 * i;

                    setResultArr((currentArray) => [
                        ...currentArray,
                        dataArr[index],
                    ]);

                    console.log(dataArr[index]);
                }
            }

            console.log(resultArr);
        }
    }, []);

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
                    {resultArr.map((item, index) => (
                        <ImageListItem key={item.src}>
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
                                src={item.src}
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

import { Box, Stack, Typography, Grid } from "@mui/material";
function Footer() {
    const info = [
        ["대표자", "조미선"],
        ["주소", "서울 금천구 서부샛길 528, 327호"],
        ["사업자등록번호", "379-17-01844"],
    ];
    const Item = ({ text }) => {
        return (
            <Stack direction="row" spacing={"1vw"} sx={{ opacity: 0.8 }}>
                <Typography
                    variant="body2"
                    component="div"
                    sx={{
                        color: "#fff379",
                        fontFamily: "NanumSquareRound",
                        fontSize: "1.2vw",
                    }}
                >
                    {text[0]}
                </Typography>

                <Typography
                    variant="body2"
                    component="div"
                    sx={{
                        color: "#ffffff",
                        fontFamily: "NanumSquareRound",
                        fontSize: "1.2vw",
                    }}
                >
                    {text[1]}
                </Typography>
            </Stack>
        );
    };
    return (
        <Box
            sx={{
                textAlign: "center",
                backgroundColor: "#000000",
                backgroundImage: `url(${"/assets/images/common/brick_bg.png"})`,
                padding: "2vw",
            }}
        >
            <Box
                sx={{
                    textAlign: "center",
                    backgroundColor: "#aaaaaa22",
                }}
            >
                <Stack
                    spacing={"3vw"}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ padding: "1.2vw" }}
                >
                    <img
                        loading="lazy"
                        src="/assets/images/common/logo/logo_small.png"
                        style={{ width: "10vw" }}
                    ></img>

                    <Stack>
                        <Stack
                            spacing={"3vw"}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            {info.map((item, index) => (
                                <Item key={index} text={item} />
                            ))}
                        </Stack>

                        <Typography
                            variant="body2"
                            component="div"
                            sx={{
                                color: "#eeeeee",
                                fontFamily: "Nanum Gothic",
                                fontSize: "1vw",
                                textAlign: "right",
                            }}
                        >
                            Copyright ⓒ 2022. cheerEnglish. ALL RIGHTS RESERVED.
                        </Typography>

                        <Typography
                            variant="body2"
                            component="div"
                            sx={{
                                color: "#c30000",
                                fontFamily: "NanumSquareRound",
                                fontSize: "1.2vw",
                                textAlign: "right",
                            }}
                        >
                            credits &gt;
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}

export default Footer;

import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function WhyCheerEng() {
    const Img = () => {
        return (
            <img
                src="/assets/images/main/whycheereng/whycheereng.png"
                style={{
                    maxHeight: "800px",
                    maxWidth: "600px",
                    width: matches ? "30vw" : "60vw",
                }}
            ></img>
        );
    };

    const Text = () => {
        return (
            <Stack
                spacing={"2.2vw"}
                justifyContent="center"
                alignItems="center"
                padding={"1.1vw"}
            >
                <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                        color: "#ffffff",
                        fontFamily: "InkLipquid",
                        fontSize: "2.5vw",
                        lineHeight: 1.5,
                    }}
                >
                    <div>
                        "빨리 가려면 혼자서 가고,
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        멀리 가려면 함께가라"
                    </div>
                </Typography>

                <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                        color: "#bcbcbc",
                        fontFamily: "NanumSquare",
                        fontSize: "1.5vw",
                    }}
                >
                    <div>혼자서 공부하는 딱딱하고 지루한 영어는 그만!</div>
                    <div>이제는 치어와 다양한 사람들과 만나서</div>
                    <div> 직접 영어로 말해보세요~</div>
                </Typography>

                <Box
                    sx={{
                        backgroundColor: "#979696aa",
                        padding: 2,
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{
                            color: "#000000",
                            fontFamily: "LeferiPoint-SpecialItalicA",
                            fontSize: "1.4vw",
                            lineHeight: 1.5,
                        }}
                    >
                        <div>1 | 함께 공부할 친구</div>
                        <div>2 | 영어 마라톤의 페이스 메이커</div>
                        <div>3 | 지치지 않도록 응원해주는 리더</div>
                    </Typography>
                </Box>
                <Box
                    sx={{
                        paddingLeft: "3.5vw",
                        paddingRight: "3.5vw",
                    }}
                >
                    <img
                        src="/assets/images/main/whycheereng/whycheereng_detail.png"
                        style={{ width: "25vw" }}
                    ></img>
                </Box>
            </Stack>
        );
    };

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <Box
            sx={{
                textAlign: "center",
                backgroundColor: "#000000",
                backgroundImage: `url(${"/assets/images/common/brick_bg.png"})`,
                padding: "3.5vw",
            }}
        >
            <img
                style={{ width: "30vw" }}
                src="/assets/images/main/whycheereng/whycheerengTitle.png"
            ></img>
            <Divider
                variant="middle"
                sx={{
                    borderColor: "#ffffff55",
                    margin: "2vw",
                    marginLeft: "6vw",
                    marginRight: "6vw",
                    borderBottomWidth: "medium",
                }}
            />

            <Stack
                spacing={"2vw"}
                direction={matches ? "row" : "column"}
                justifyContent="center"
                alignItems="center"
                width="100vw"
            >
                <Img />
                <Text />
            </Stack>
        </Box>
    );
}

export default WhyCheerEng;

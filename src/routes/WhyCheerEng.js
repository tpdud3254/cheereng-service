import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
function WhyCheerEng() {
    const Img = () => {
        return (
            <img
                src="/assets/images/whycheereng.png"
                style={{
                    maxHeight: "800px",
                    maxWidth: "600px",
                    width: "100%",
                }}
            ></img>
        );
    };

    const Text = () => {
        return (
            <Stack
                spacing={3}
                justifyContent="center"
                alignItems="center"
                padding={2}
            >
                <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                        color: "#ffffff",
                        fontFamily: "InkLipquid",
                        fontSize: 30,
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
                        fontSize: 20,
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
                            fontSize: 18,
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
                        paddingLeft: 5,
                        paddingRight: 5,
                    }}
                >
                    <img
                        src="/assets/images/whycheereng_detail.png"
                        style={{ width: "100%" }}
                    ></img>
                </Box>
            </Stack>
        );
    };
    return (
        <Box
            sx={{
                textAlign: "center",
                backgroundColor: "#000000",
                backgroundImage: `url(${"/assets/images/header_bg3.png"})`,
                padding: 5,
                paddingLeft: 30,
                paddingRight: 30,
            }}
        >
            <img src="/assets/images/whycheerengTitle.png"></img>
            <Divider
                variant="middle"
                sx={{
                    borderColor: "#ffffff55",
                    margin: 3,
                    marginLeft: 10,
                    marginRight: 10,
                    borderBottomWidth: "medium",
                }}
            />

            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <Img />
                </Grid>
                <Grid item xs={6}>
                    <Text />
                </Grid>
            </Grid>
        </Box>
    );
}

export default WhyCheerEng;

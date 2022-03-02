import { Box, Grid, Stack, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: "1.5vw",
    height: "3vw",
    textAlign: "center",
    width: "9vw",
    backgroundColor: "#48c293",
    color: "#fdfbf8",
    fontFamily: "BMJUA",
    borderRadius: 20,
    "&:hover": {
        backgroundColor: "#48c293",
        boxShadow: "none",
        color: "#fdfbf8",
    },
});

function Participation() {
    return (
        <Box
            sx={{
                backgroundColor: "#000000",
                backgroundImage: `url(${"/assets/images/common/brick_bg.png"})`,
                padding: "5vw",
            }}
        >
            <div style={{ width: "80%", margin: "1vw auto" }}>
                <Box
                    sx={{
                        backgroundImage: `url(${"/assets/images/sub/partification/partification.png"})`,
                        padding: "3vw",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        height: "auto",
                    }}
                >
                    <Grid container sx={{ width: "100%" }}>
                        <Grid item xs={6}></Grid>
                        <Grid item xs={6}>
                            <Box
                                sx={{
                                    backgroundColor: "#ffffffaa",
                                    paddingTop: "2vw",
                                }}
                            >
                                <Stack
                                    spacing={"2.5vw"}
                                    sx={{
                                        textAlign: "left",
                                        padding: "2.5vw",
                                    }}
                                >
                                    <div>
                                        <Typography
                                            variant="body1"
                                            component="div"
                                            sx={{
                                                color: "#000000",
                                                fontFamily:
                                                    "NEXON Lv2 Gothic Light",
                                                fontSize: "1.5vw",
                                            }}
                                        >
                                            “치얼잉글리쉬 한번 참가 해볼까?”
                                        </Typography>

                                        <Typography
                                            variant="h4"
                                            component="div"
                                            sx={{
                                                color: "#000000",
                                                fontFamily:
                                                    "SEBANG_Gothic_Bold",
                                                fontSize: "3vw",
                                            }}
                                        >
                                            치잉 참가 신청서!
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography
                                            variant="body1"
                                            component="div"
                                            sx={{
                                                color: "#000000",
                                                fontFamily:
                                                    "LeferiPoint-WhiteA",
                                                fontSize: "1.5vw",
                                            }}
                                        >
                                            간단한 13문항의 신청서를 완료하고
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            component="div"
                                            sx={{
                                                color: "#000000",
                                                fontFamily:
                                                    "LeferiPoint-WhiteA",
                                                fontSize: "1.5vw",
                                            }}
                                        >
                                            치얼잉글리쉬 치어들에게 상담
                                            받으세요!
                                        </Typography>
                                    </div>

                                    <Item>참가하기</Item>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </Box>
    );
}

export default Participation;

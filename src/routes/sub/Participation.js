import { Box, Grid, Stack, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: "1.5vw",
    height: "35px",
    textAlign: "center",
    width: 100,
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
                padding: 10,
                textAlign: "left",
            }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${"/assets/images/sub/partification/partification.png"})`,
                    padding: 5,
                    marginLeft: 10,
                    marginRight: 10,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Grid container>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={6}>
                        <Box
                            sx={{
                                backgroundColor: "#ffffffaa",
                                paddingTop: 5,
                                paddingBottom: 5,
                            }}
                        >
                            <Stack
                                spacing={5}
                                sx={{
                                    padding: 3,
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
                                            fontFamily: "SEBANG_Gothic_Bold",
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
                                            fontFamily: "LeferiPoint-WhiteA",
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
                                            fontFamily: "LeferiPoint-WhiteA",
                                            fontSize: "1.5vw",
                                        }}
                                    >
                                        치얼잉글리쉬 치어들에게 상담 받으세요!
                                    </Typography>
                                </div>

                                <Item>참가하기</Item>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default Participation;

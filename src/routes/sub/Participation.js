import { Box, Grid, Stack, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Participation() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    const Item = styled(Button)({
        boxShadow: "none",
        textTransform: "none",
        fontSize: matches ? "1.5vw" : "4vw",
        height: matches ? "3vw" : "9vw",
        textAlign: "center",
        width: matches ? "9vw" : "25vw",
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

    const Text = () => {
        return (
            <Box
                sx={{
                    backgroundColor: "#ffffffaa",
                    paddingTop: matches ? "2vw" : "",
                    width: matches ? "unset" : "100%",
                    height: matches ? "unset" : "100%",
                }}
            >
                <Stack
                    spacing={"2.5vw"}
                    sx={{
                        textAlign: matches ? "left" : "center",
                        padding: matches ? "2.5vw" : "unset",
                        paddingTop: matches ? "2.5vw" : "5vw",
                        paddingBottom: matches ? "2.5vw" : "5vw",
                    }}
                >
                    <div>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{
                                color: "#000000",
                                fontFamily: "NEXON Lv2 Gothic Light",
                                fontSize: matches ? "1.5vw" : "4vw",
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
                                fontSize: matches ? "3vw" : "7vw",
                            }}
                        >
                            치잉 참가 신청서!
                        </Typography>
                    </div>
                    {matches ? null : (
                        <img
                            src="/assets/images/sub/partification/partification_m.png"
                            style={{ width: "100vw", opacity: 0.9 }}
                        ></img>
                    )}

                    <div>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{
                                color: "#000000",
                                fontFamily: "LeferiPoint-WhiteA",
                                fontSize: matches ? "1.5vw" : "3.8vw",
                            }}
                        >
                            간단한 10문항의 신청서를 완료하고
                        </Typography>
                        {matches ? (
                            <Typography
                                variant="body1"
                                component="div"
                                sx={{
                                    color: "#000000",
                                    fontFamily: "LeferiPoint-WhiteA",
                                    fontSize: matches ? "1.5vw" : "3.8vw",
                                }}
                            >
                                치얼잉글리쉬 치어들에게 상담 받으세요!
                            </Typography>
                        ) : (
                            <>
                                <Typography
                                    variant="body1"
                                    component="div"
                                    sx={{
                                        color: "#000000",
                                        fontFamily: "LeferiPoint-WhiteA",
                                        fontSize: matches ? "1.5vw" : "3.8vw",
                                    }}
                                >
                                    치얼잉글리쉬 치어들에게
                                </Typography>
                                <Typography
                                    variant="body1"
                                    component="div"
                                    sx={{
                                        color: "#000000",
                                        fontFamily: "LeferiPoint-WhiteA",
                                        fontSize: matches ? "1.5vw" : "3.8vw",
                                    }}
                                >
                                    상담 받으세요!
                                </Typography>
                            </>
                        )}
                    </div>
                    <a
                        href="https://docs.google.com/forms/d/1k5INEvIH2elAQuxHDmA8axDyDbWrIPKTfaOvhnocaVU/edit"
                        style={{
                            textDecoration: "none",
                        }}
                        target="_blank"
                    >
                        <Item>참가하기</Item>
                    </a>
                </Stack>
            </Box>
        );
    };

    return (
        <Box
            sx={{
                backgroundColor: "#000000",
                backgroundSize: "contain",
                backgroundImage: `url(${"/assets/images/common/brick_bg.png"})`,
                padding: matches ? "5vw" : "",
                width: "100vw",
            }}
        >
            <div
                style={{
                    width: matches ? "80%" : "100%",
                    margin: matches ? "1vw auto" : "",
                }}
            >
                {matches ? (
                    <Box
                        sx={{
                            backgroundImage: `url(${`/assets/images/sub/partification/partification.png`})`,
                            padding: "3vw",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            height: "auto",
                        }}
                    >
                        <Grid container sx={{ width: "90%" }}>
                            <Grid item xs={6}></Grid>
                            <Grid item xs={6}>
                                <Text />
                            </Grid>
                        </Grid>
                    </Box>
                ) : (
                    <Box
                        sx={{
                            backgroundColor: "#ead8cc",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop: "10vw",
                            paddingBottom: "10vw",
                        }}
                    >
                        <Text />
                    </Box>
                )}
            </div>
        </Box>
    );
}

export default Participation;

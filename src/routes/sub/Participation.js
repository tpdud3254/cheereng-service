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
                        padding: "2.5vw",
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
                            간단한 13문항의 신청서를 완료하고
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
                            치얼잉글리쉬 치어들에게 상담 받으세요!
                        </Typography>
                    </div>
                    <a
                        href="https://docs.google.com/forms/d/1k5INEvIH2elAQuxHDmA8axDyDbWrIPKTfaOvhnocaVU/edit"
                        style={{
                            textDecoration: "none",
                        }}
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
                            height: "50vw",
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                            border: "1px solid black",
                            padding: "10vw",
                        }}
                    >
                        <Box
                            sx={{
                                backgroundImage: `url(${`/assets/images/sub/partification/partification_m.png`})`,
                                padding: "6vw",
                                backgroundSize: matches ? "contain" : "cover",
                                backgroundRepeat: "no-repeat",
                                height: matches ? "auto" : "50vw",
                            }}
                        >
                            <Text />
                        </Box>
                    </Box>
                )}
            </div>
        </Box>
    );
}

export default Participation;

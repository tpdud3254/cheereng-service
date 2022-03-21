import { AppBar, Toolbar, Stack, Box } from "@mui/material";

function BottomBar() {
    return (
        <AppBar
            position="fixed"
            color="primary"
            sx={{
                top: "auto",
                bottom: 0,
                backgroundColor: "#b5a78b",
                textAlign: "center",
                width: "100vw",
            }}
        >
            <a
                href="http://pf.kakao.com/_ZWfxib"
                style={{
                    textDecoration: "none",
                    color: "#ffffff",
                    cursor: "pointer",
                }}
                target="_blank"
            >
                <Toolbar>
                    <Box
                        sx={{
                            textAlign: "center",
                            fontFamily: "GyeonggiTitleM",
                            fontSize: "5vw",
                            width: "100%",
                        }}
                    >
                        <Stack
                            spacing={"2vw"}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <img
                                style={{
                                    width: "7vw",
                                    opacity: 0.9,
                                }}
                                src="/assets/images/common/kakao.png"
                            ></img>
                            <span>카톡상담 바로가기</span>
                        </Stack>
                    </Box>
                </Toolbar>
            </a>
        </AppBar>
    );
}

export default BottomBar;

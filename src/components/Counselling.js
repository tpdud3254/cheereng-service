import { Box, Button, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

function Counselling() {
    const Item = styled(Button)({
        boxShadow: "none",
        textTransform: "none",
        fontSize: 17,
        height: "50px",
        textAlign: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundColor: "#eeb551",
        color: "#ffffff",
        fontFamily: "NanumSquare",
        fontWeight: "bold",
        "&:hover": {
            boxShadow: "none",
            backgroundColor: "#eeb551",
            color: "#ffffff",
            opacity: 0.7,
        },
        margin: 20,
        paddingLeft: 20,
        paddingRight: 20,
    });

    return (
        <div>
            <Box
                sx={{
                    textAlign: "center",
                    backgroundColor: "#ffffff",
                    backgroundImage: `url(${"/assets/images/counselling.png"})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    padding: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    opacity: 0.8,
                }}
            >
                <Box
                    sx={{
                        textAlign: "center",
                        backgroundColor: "#ffffff99",
                        padding: 10,
                        paddingLeft: 20,
                        paddingRight: 20,
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{
                            color: "#434343",
                            fontFamily: "LeferiPoint-WhiteA",
                            fontWeight: "bold",
                            fontSize: 20,
                        }}
                    >
                        <div>치어잉글리쉬 리더로 참가하고 싶으신가요?</div>
                        <div>즐겁고 유쾌한스터디를 만들어보세요.</div>
                        <div>치어잉글리쉬가 도와줍니다.</div>
                    </Typography>

                    <Typography
                        variant="subtitle2"
                        component="div"
                        sx={{
                            color: "#c21414",
                            fontFamily: "NanumSquare",
                            fontWeight: "bold",
                            fontSize: 20,
                            paddingTop: 5,
                        }}
                    >
                        리더가 되는 방법을 확인해 보세요 &gt;
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    textAlign: "center",
                    backgroundColor: "#ffffff",
                    padding: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                }}
            >
                <Typography
                    variant="h3"
                    component="span"
                    sx={{
                        color: "#b30000",
                        fontFamily: "SEBANG_Gothic_Bold",
                        fontWeight: "bold",
                    }}
                >
                    새로운 경험,&nbsp;
                    <Typography
                        variant="h2"
                        component="span"
                        sx={{
                            color: "#000000",
                            fontFamily: "SEBANG_Gothic_Bold",
                            fontWeight: "bold",
                        }}
                    >
                        치얼잉글리쉬
                    </Typography>
                    에서 만나보세요.
                </Typography>

                <Divider
                    variant="middle"
                    sx={{
                        borderColor: "#00000022",
                        margin: 4,
                        marginLeft: 10,
                        marginRight: 10,
                        borderBottomWidth: "medium",
                    }}
                />

                <Typography
                    variant="body1"
                    component="div"
                    sx={{
                        color: "#727272",
                        fontFamily: "NEXON Lv2 Gothic Light",
                        fontWeight: "bold",
                        fontSize: 25,
                    }}
                >
                    <div>딱딱한 영어는 이제 그만!</div>
                    <div>치얼잉글리쉬에서 색다른 경험을 가져보세요.</div>
                </Typography>

                <Typography
                    variant="body1"
                    component="div"
                    sx={{
                        color: "#d98809",
                        fontFamily: "NEXON Lv2 Gothic Light",
                        fontWeight: "bold",
                        fontSize: 25,
                        margin: 3,
                    }}
                >
                    <div>지금 상담하기 눌러주세요!</div>
                    <div>치어들이 친절하게 안내 드리겠습니다.</div>
                </Typography>

                <img style={{ margin: 6 }} src="/assets/images/arrow.png"></img>

                <div>
                    <Item>카톡상담 바로가기</Item>
                </div>
            </Box>
        </div>
    );
}

export default Counselling;

import { Box, Button, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

function Counselling() {
    const Item = styled(Button)({
        boxShadow: "none",
        textTransform: "none",
        fontSize: "1.5vw",
        textAlign: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundColor: "#eeb551",
        color: "#ffffff",
        fontFamily: "Cafe24Ssurround",
        "&:hover": {
            boxShadow: "none",
            backgroundColor: "#eeb551",
            color: "#ffffff",
            opacity: 0.7,
        },
        margin: "2vw",
        padding: "1vw",
    });

    return (
        <div>
            <Box
                sx={{
                    textAlign: "center",
                    backgroundColor: "#ffffff",
                    backgroundImage: `url(${"/assets/images/main/counselling/counselling.png"})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    padding: "7vw",
                    paddingLeft: "14vw",
                    paddingRight: "14vw",
                    opacity: 0.8,
                }}
            >
                <Box
                    sx={{
                        textAlign: "center",
                        backgroundColor: "#ffffff99",
                        padding: "7vw",
                        paddingLeft: "14vw",
                        paddingRight: "14vw",
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{
                            color: "#434343",
                            fontFamily: "LeferiPoint-WhiteA",
                            fontWeight: "bold",
                            fontSize: "1.8vw",
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
                            fontSize: "1.8vw",
                            paddingTop: "3.5vw",
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
                    padding: "7vw",
                    paddingLeft: "5vw",
                    paddingRight: "5vw",
                }}
            >
                <Typography
                    variant="h3"
                    component="span"
                    sx={{
                        color: "#b30000",
                        fontFamily: "SEBANG_Gothic_Bold",
                        fontWeight: "bold",
                        fontSize: "4.3vw",
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
                            fontSize: "5.5vw",
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
                        margin: "3vw",
                        marginLeft: "7vw",
                        marginRight: "7vw",
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
                        fontSize: "2.3vw",
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
                        fontSize: "2.3vw",
                        margin: "2.3vw",
                    }}
                >
                    <div>지금 상담하기 눌러주세요!</div>
                    <div>치어들이 친절하게 안내 드리겠습니다.</div>
                </Typography>

                <img
                    style={{ margin: "0.5vw", width: "3vw" }}
                    src="/assets/images/common/arrow.png"
                ></img>

                <div>
                    <Item>카톡상담 바로가기</Item>
                </div>
            </Box>
        </div>
    );
}

export default Counselling;

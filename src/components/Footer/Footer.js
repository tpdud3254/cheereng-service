import { Box, Stack, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

function Footer() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const [credits, setCredits] = useState(false);
    const info = [
        ["대표자", "조미선"],
        ["주소", "서울 금천구 서부샛길 528, 327호"],
        ["사업자등록번호", "379-17-01844"],
        ["전화번호", "02) 858-6457"],
    ];
    const Item = ({ text }) => {
        return (
            <Stack direction="row" spacing={"1vw"} sx={{ opacity: 0.8 }}>
                <Typography
                    variant="body2"
                    component="div"
                    sx={{
                        color: "#eeeeee",
                        fontSize: matches ? "0.8vw" : "3.5vw",
                    }}
                >
                    {text[0]}.
                </Typography>

                <Typography
                    variant="body2"
                    component="div"
                    sx={{
                        color: "#eeeeee",
                        fontSize: matches ? "0.8vw" : "3.5vw",
                    }}
                >
                    {text[1]}
                </Typography>
            </Stack>
        );
    };

    const clickCredits = () => {
        setCredits(cur => !cur)
    };

    const Credits = ({align}) => {
        return <div style={{    display: "contents",
        textAlign: align, fontSize:"0.7rem"}}>
                            <a href="https://www.flaticon.com/free-icons/female-cheerleader" title="female cheerleader icons">Female cheerleader icons created by Freepik - Flaticon</a>
    <a href="https://www.flaticon.com/kr/free-icons/-" title="카카오 톡 아이콘">카카오 톡 아이콘  제작자: Fathema Khanom - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/medal" title="medal icons">Medal icons created by Vectors Market - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/walk" title="walk icons">Walk icons created by Freepik - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/run" title="run icons">Run icons created by Freepik - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/happy" title="happy icons">Happy icons created by Freepik - Flaticon</a>
    <a href="https://kr.freepik.com/photos/design">Design 사진는 rawpixel.com - kr.freepik.com가 제작함</a>
    <a href="https://www.flaticon.com/kr/free-icons/-" title="- 아이콘">- 아이콘  제작자: Prosymbols Premium - Flaticon</a>
    <a href="https://www.flaticon.com/kr/free-icons/" title=" 아이콘"> 아이콘  제작자: Prosymbols Premium - Flaticon</a>
    <a href="https://www.flaticon.com/kr/free-icons/-" title="책 공개 시험 아이콘">책 공개 시험 아이콘  제작자: Prosymbols Premium - Flaticon</a>
    <a href="https://www.flaticon.com/kr/free-icons/-" title="- 아이콘">- 아이콘  제작자: Prosymbols Premium - Flaticon</a>
    <a href="https://www.flaticon.com/kr/free-icons/-" title="- 아이콘">- 아이콘  제작자: Prosymbols Premium - Flaticon</a>
    <a href="https://www.flaticon.com/kr/free-icons/" title="휴대폰 아이콘">휴대폰 아이콘  제작자: Prosymbols Premium - Flaticon</a>
    <a href="https://www.flaticon.com/kr/free-icons/" title="컨설팅 아이콘">컨설팅 아이콘  제작자: Prosymbols Premium - Flaticon</a>
                                </div>
    }

    return (
        <Box
            sx={{
                textAlign: "center",
                backgroundColor: "#000000",
                // backgroundImage: `url(${"/assets/images/common/brick_bg.png"})`,
                width: "100vw",
                marginBottom: matches ? "" : "16vw",
            }}
        >
            {matches ? (
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
                        style={{ width: "9vw" }}
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
                                fontSize: "0.6vw",
                                textAlign: "right",
                                opacity: 0.7,
                            }}
                        >
                            Copyright ⓒ 2022. cheerEnglish. ALL RIGHTS RESERVED.
                        </Typography>

                        <Typography
                            variant="body2"
                            component="div"
                            sx={{
                                color: credits ? "#ffffffaa" :  "#c30000aa",
                                fontSize: "0.8vw",
                                textAlign: "right",
                            }}
                            onClick={clickCredits}
                        >
                            credits &gt;
                        </Typography>
                            {credits ? <Credits align="right"/> : null}
                        
                    </Stack>
                </Stack>
            ) : (
                <Stack
                    justifyContent="center"
                    alignItems="center"
                    sx={{ padding: "3vw" }}
                >
                    <img
                        loading="lazy"
                        src="/assets/images/common/logo/logo_small.png"
                        style={{ width: "17vw", margin: "3vw" }}
                    ></img>
                    {info.map((item, index) => (
                        <Item key={index} text={item} />
                    ))}

                    <Typography
                        variant="body2"
                        component="div"
                        sx={{
                            color: "#eeeeee",
                            fontSize: matches ? "0.6vw" : "3vw",
                            textAlign: "right",
                            opacity: 0.7,
                        }}
                    >
                        Copyright ⓒ 2022. cheerEnglish. ALL RIGHTS RESERVED.
                    </Typography>

                    <Typography
                        variant="body2"
                        component="div"
                        sx={{
                            color: credits ? "#ffffffaa" :  "#dddddd66",
                            fontSize: matches ? "0.8vw" : "3vw",
                            textAlign: "right",
                        }}
                        onClick={clickCredits}
                    >
                        credits &gt;
                    </Typography>
                    {credits ? <Credits align="center"/> : null}
                </Stack>
            )}
        </Box>
    );
}

export default Footer;

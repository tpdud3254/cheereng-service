import { Box, Stack, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Footer() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const info = [
        ["대표자", "조미선"],
        ["주소", "서울 금천구 서부샛길 528, 327호"],
        ["사업자등록번호", "379-17-01844"],
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
                        style={{ width: "7vw" }}
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
                                color: "#c30000aa",
                                fontSize: "0.8vw",
                                textAlign: "right",
                            }}
                        >
                            credits &gt;
                        </Typography>
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
                        style={{ width: "12vw", margin: "3vw" }}
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
                            color: "#dddddd66",
                            fontSize: matches ? "0.8vw" : "3vw",
                            textAlign: "right",
                        }}
                    >
                        credits &gt;
                    </Typography>
                </Stack>
            )}
        </Box>
    );
}

export default Footer;

import { Box, Typography, Stack } from "@mui/material";
import { mobileProfileInfo as profiles } from "./profileInfo";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
function ProfileDetail({ selected }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    let profile = {};
    const arr = [1, 2, 3, 4];
    profiles.forEach((e) => {
        if (selected == e.name) {
            profile = e;
        }
    });
    return (
        <Box
            sx={{
                textAlign: "left",
                backgroundColor: "#000000",
                paddingBottom: "2wv",
            }}
        >
            <Box
                sx={{
                    backgroundColor: "#222222",
                    marginLeft: "11vw",
                    marginRight: "11vw",
                    padding: "3vw",
                    paddingTop: "2vw",
                }}
            >
                <Stack spacing={"1.5vw"}>
                    <Stack direction="row" alignItems="center">
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{
                                color: "#ffffff",
                                fontFamily: "SEBANG_Gothic_Bold",
                                fontSize: matches ? "1.5vw" : "4.5vw",
                            }}
                        >
                            <span style={{ color: "#00ffd8" }}>|</span>&nbsp;
                            {profile.name} &nbsp;/&nbsp;&nbsp;
                            {profile.mbti} &nbsp;/&nbsp;&nbsp;
                        </Typography>
                        <a href={profile.kakao}>
                            <img
                                style={{
                                    width: matches ? "2.2vw" : "6vw",
                                    paddingBottom: matches ? "0.5vw" : "",
                                }}
                                src="/assets/images/common/kakao.png"
                            ></img>
                        </a>
                    </Stack>

                    <Typography
                        variant="body1"
                        component="div"
                        sx={{
                            color: "#ffffff",
                            fontFamily: "NanumSquare",
                            fontSize: matches ? "1vw" : "4vw",
                        }}
                    >
                        {profile.greeting.split("\n").map((line, i) => {
                            return (
                                <span key={i}>
                                    {line}
                                    <br />
                                </span>
                            );
                        })}
                    </Typography>
                    {matches ? (
                        <Stack
                            direction="row"
                            spacing={"4vw"}
                            justifyContent="center"
                            alignItems="center"
                        >
                            {arr.map((item, index) => (
                                <img
                                    src={`/assets/images/main/profiles/sub/${
                                        profile.name
                                    }${index + 1}.png`}
                                    style={{ width: "20%" }}
                                    key={index}
                                ></img>
                            ))}
                        </Stack>
                    ) : (
                        <ImageList cols={2}>
                            {arr.map((item, index) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`/assets/images/main/profiles/sub/${
                                            profile.name
                                        }${index + 1}.png`}
                                        alt={index}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    )}
                </Stack>
            </Box>
        </Box>
    );
}

export default ProfileDetail;

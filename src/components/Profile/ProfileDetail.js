import "../../css/font.css";
import { useTheme } from "@mui/material/styles";
import ImageList from "@mui/material/ImageList";
import { Box, Typography, Stack } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { mobileProfileInfo as profiles } from "./profileInfo";

function ProfileDetail({ selected }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    let profile = {};
    const arr = [1, 2, 3, 4];

    profiles.forEach((e) => {
        if (selected === e.name) {
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
                                fontSize: matches ? "1.3rem" : "1.1rem",
                            }}
                        >
                            <span style={{ color: "#00ffd8" }}>|</span>&nbsp;
                            {profile.name} &nbsp;/&nbsp;&nbsp;
                            {profile.mbti} &nbsp;/&nbsp;&nbsp;
                        </Typography>
                        <a
                            href={profile.kakao}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                style={{
                                    width: matches ? "2.2vw" : "6vw",
                                    paddingBottom: matches ? "0.5vw" : "",
                                }}
                                src="/assets/images/common/kakao.png"
                                alt="kakao"
                            ></img>
                        </a>
                    </Stack>

                    <Typography
                        variant="body1"
                        component="div"
                        sx={{
                            color: "#ffffff",
                            fontFamily: "S-CoreDream-3Light",
                            fontSize: "0.9rem",
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
                                <picture key={index} style={{ width: "20%" }}>
                                    <source
                                        type="image/webp"
                                        srcSet={`/assets/images/main/profiles/sub/${
                                            profile.name
                                        }${index + 1}.webp`}
                                    />
                                    <img
                                        src={`/assets/images/main/profiles/sub/${
                                            profile.name
                                        }${index + 1}.jpg`}
                                        style={{ width: "100%" }}
                                        alt={profile.name}
                                    />
                                </picture>
                            ))}
                        </Stack>
                    ) : (
                        <ImageList cols={2}>
                            {arr.map((item, index) => (
                                <ImageListItem key={index}>
                                    <img
                                        src={`/assets/images/main/profiles/sub/${
                                            profile.name
                                        }${index + 1}.jpg`}
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

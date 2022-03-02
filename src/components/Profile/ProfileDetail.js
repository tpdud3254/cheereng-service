import { Box, Typography, Stack } from "@mui/material";
import { mobileProfileInfo as profiles } from "./profileInfo";
function ProfileDetail({ selected }) {
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
                                fontSize: "1.5vw",
                            }}
                        >
                            <span style={{ color: "#00ffd8" }}>|</span>&nbsp;
                            {profile.name} &nbsp;/&nbsp;&nbsp;
                            {profile.mbti} &nbsp;/&nbsp;&nbsp;
                        </Typography>
                        <a href={profile.kakao}>
                            <img
                                style={{
                                    width: "2.2vw",
                                    paddingBottom: "0.5vw",
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
                            fontSize: "1vw",
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
                            ></img>
                        ))}
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}

export default ProfileDetail;

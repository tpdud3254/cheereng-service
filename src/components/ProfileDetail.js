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
                paddingBottom: 5,
            }}
        >
            <Box
                sx={{
                    backgroundColor: "#222222",
                    marginLeft: 20,
                    marginRight: 20,
                    paddingLeft: 5,
                    paddingRight: 5,
                    paddingTop: 3,
                    paddingBottom: 5,
                }}
            >
                <Stack spacing={2}>
                    <Stack direction="row" alignItems="center">
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{
                                color: "#ffffff",
                                fontFamily: "SEBANG_Gothic_Bold",
                            }}
                        >
                            <span style={{ color: "#00ffd8" }}>|</span>&nbsp;
                            {profile.name} &nbsp;/&nbsp;&nbsp;
                            {profile.mbti} &nbsp;/&nbsp;&nbsp;
                        </Typography>
                        <img
                            style={{ width: 25, paddingBottom: 4 }}
                            src="/assets/images/common/kakao.png"
                        ></img>
                    </Stack>

                    <Typography
                        variant="body1"
                        component="div"
                        sx={{
                            color: "#ffffff",
                            fontFamily: "NanumSquare",
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
                        spacing={{
                            md: 5,
                            lg: 10,
                            xl: 10,
                        }}
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

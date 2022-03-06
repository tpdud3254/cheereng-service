import { Box, Stack, Avatar } from "@mui/material";
import Profile from "./Profile";
import Title from "../Title/Title";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { profileInfo, mobileProfileInfo } from "./profileInfo";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ProfileDetail from "./ProfileDetail";
import { Navigation } from "swiper";
import { Animate } from "react-rebound";

import "swiper/css";
import "swiper/css/navigation";

function Introductions() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const [detail, setDetail] = useState(false);
    const [selected, setSelected] = useState("");
    const [opacity, setOpacity] = useState(1);

    const onClick = (e) => {
        setDetail((cur) => !cur);
        setSelected(e.target.alt);
    };

    const onSwiperClick = () => {
        if (detail) setDetail((cur) => !cur);
    };

    useEffect(() => {
        if (!detail) {
            setOpacity(1);
        } else {
            setOpacity(0.5);
        }
    }, [detail]);

    const handleTouch = () => {
        setSelected(
            document.getElementsByClassName("swiper-slide-active")[0].id
        );
    };

    return (
        <Box
            sx={{
                textAlign: "center",
                backgroundColor: "#000000",
                paddingTop: matches ? "5vw" : "10vw",
                paddingBottom: matches ? "5vw" : "10vw",
            }}
        >
            <Title text="CHEER 소개" />
            <div
                onClick={matches ? onSwiperClick : handleTouch}
                onPointerDown={matches ? onSwiperClick : null}
            >
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    style={{
                        marginLeft: "5vw",
                        marginRight: "5vw",
                        marginBottom: "2vw",
                    }}
                >
                    {matches
                        ? profileInfo.map((items, index) => (
                              <SwiperSlide key={index}>
                                  <Stack
                                      direction="row"
                                      spacing={"8vw"}
                                      justifyContent="center"
                                      alignItems="center"
                                  >
                                      {items.map((profile, row) => (
                                          <Profile
                                              key={row}
                                              profile={profile}
                                              onClick={onClick}
                                              opacity={opacity}
                                              selected={selected}
                                          />
                                      ))}
                                  </Stack>
                              </SwiperSlide>
                          ))
                        : mobileProfileInfo.map((profile, index) => (
                              <SwiperSlide
                                  key={index}
                                  onTouchEnd={handleTouch}
                                  id={profile.name}
                              >
                                  <Box>
                                      <img
                                          src={`/assets/images/main/profiles/main/${profile.name}.png`}
                                          alt={profile.name}
                                          style={{
                                              width: "50vw",
                                              marginBottom: "4vw",
                                              borderRadius: 100,
                                          }}
                                          onClick={onClick}
                                      ></img>
                                      <div
                                          style={{
                                              color: "#ffffff",
                                              fontFamily: "NanumSquareRound",
                                              fontSize: "5vw",
                                          }}
                                      >
                                          {profile.summary}
                                      </div>
                                  </Box>
                              </SwiperSlide>
                          ))}
                </Swiper>
            </div>
            <Animate opacity={detail ? 1 : 0} translateY={detail ? 0 : -200}>
                <div>
                    {detail ? <ProfileDetail selected={selected} /> : null}
                </div>
            </Animate>
        </Box>
    );
}

export default Introductions;

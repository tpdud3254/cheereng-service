import { Box, Stack } from "@mui/material";
import Profile from "./Profile";
import Title from "./Title";
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

    useEffect(() => {
        if (!detail) {
            setOpacity(1);
        } else {
            setOpacity(0.5);
        }
    }, [detail]);

    return (
        <Box
            sx={{
                textAlign: "center",
                backgroundColor: "#000000",
                paddingTop: 8,
                paddingBottom: 8,
            }}
        >
            <Title text="CHEER 소개" />
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                style={{
                    marginLeft: 100,
                    marginRight: 100,
                    marginBottom: 50,
                }}
            >
                {matches
                    ? profileInfo.map((items, index) => (
                          <SwiperSlide key={index}>
                              <Stack
                                  direction="row"
                                  spacing={{
                                      md: 5,
                                      lg: 10,
                                      xl: 15,
                                  }}
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
                          <SwiperSlide key={index}>
                              <Profile profile={profile} onClick={onClick} />
                          </SwiperSlide>
                      ))}
            </Swiper>

            <Animate opacity={detail ? 1 : 0} translateY={detail ? 0 : -200}>
                <div>
                    {detail ? <ProfileDetail selected={selected} /> : null}
                </div>
            </Animate>
        </Box>
    );
}

export default Introductions;

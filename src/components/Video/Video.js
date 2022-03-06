import ReactPlayer from "react-player/lazy";
import { Box, Stack } from "@mui/material";
import { useState } from "react";

function Video() {
    const [url, setUrl] = useState("/assets/video/theme.mp4");

    const handleVideo = () => {
        setUrl("");
        setUrl("/assets/video/theme.mp4");
    };

    return (
        <>
            <Box
                justifyContent="center"
                alignItems="center"
                sx={{
                    backgroundColor: "#000000",
                }}
            >
                <ReactPlayer
                    className="react-player"
                    url={url} // 플레이어 url
                    width="100%" // 플레이어 크기 (가로)
                    height="unset" // 플레이어 크기 (세로)
                    playing={true} // 자동 재생 on
                    muted={true} // 자동 재생 on
                    controls={false} // 플레이어 컨트롤 노출 여부
                    light={false} // 플레이어 모드
                    pip={false} // pip 모드 설정 여부
                    onEnded={handleVideo}
                />
            </Box>
        </>
    );
}

export default Video;

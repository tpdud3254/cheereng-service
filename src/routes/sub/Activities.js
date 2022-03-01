import ReactPlayer from "react-player/lazy";
import {
    Box,
    Stack,
    Button,
    Typography,
    ImageList,
    ImageListItem,
} from "@mui/material";
import { useState } from "react";
import Video from "../../components/Video";
import { styled } from "@mui/material/styles";

import { activitiesInfo } from "../../components/activitiesInfo";
import Activity from "../../components/Activity";

const Item = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 19,
    height: "35px",
    textAlign: "center",
    backgroundColor: "#dcbf8b",
    color: "#fdfbf8",
    fontFamily: "SEBANG_Gothic_Bold",
    "&:hover": {
        backgroundColor: "#dcbf8b",
        boxShadow: "none",
        color: "#31271c",
        opacity: 0.7,
    },
});

function Activities() {
    return (
        <>
            <Video />

            <Box sx={{ paddingTop: 5, paddingBottom: 5 }}>
                <Box sx={{ backgroundColor: "#f1f1f1" }}>
                    <Stack
                        spacing={10}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ height: 55 }}
                    >
                        {activitiesInfo.map((item) => (
                            <Item key={item.title}>{item.title}</Item>
                        ))}
                    </Stack>
                </Box>

                {activitiesInfo.map((item, index) => (
                    <Activity obj={item} index={index} />
                ))}
            </Box>
        </>
    );
}

export default Activities;

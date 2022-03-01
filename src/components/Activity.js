import {
    Box,
    Stack,
    Button,
    Typography,
    ImageList,
    ImageListItem,
} from "@mui/material";
import { activitiesInfo } from "../components/activitiesInfo";

function Activity({ obj, index }) {
    console.log(obj);
    return (
        <Stack
            spacing={4}
            justifyContent="center"
            alignItems="center"
            sx={{
                padding: 10,
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#f1f1f1",
            }}
        >
            <Typography
                variant="h3"
                component="div"
                sx={{
                    color: "#000000",
                    fontFamily: "SEBANG_Gothic_Bold",
                    fontSize: 30,
                    lineHeight: 1.5,
                }}
            >
                {obj.title}
            </Typography>

            <ImageList
                sx={{
                    backgroundColor: index % 2 === 0 ? "#f1f1f1" : "#ffffff",
                    padding: 2,
                }}
                variant="woven"
                cols={3}
                gap={8}
            >
                {activitiesInfo[index].url.map((item, index) => (
                    <ImageListItem key={item}>
                        <img src={item} alt={index} />
                    </ImageListItem>
                ))}
            </ImageList>

            <Typography
                variant="body1"
                component="div"
                sx={{
                    color: "#000000",
                    fontFamily: "NEXON Lv2 Gothic Light",
                    fontSize: 25,
                    fontWeight: "bold",
                    lineHeight: 1.5,
                }}
            >
                {obj.explain}
            </Typography>
        </Stack>
    );
}

export default Activity;

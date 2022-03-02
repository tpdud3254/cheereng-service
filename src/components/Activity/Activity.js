import {
    Box,
    Stack,
    Button,
    Typography,
    ImageList,
    ImageListItem,
} from "@mui/material";
import { activitiesInfo } from "./activitiesInfo";

function Activity({ obj, index }) {
    console.log(obj);
    return (
        <Stack
            spacing={"2.3vw"}
            justifyContent="center"
            alignItems="center"
            sx={{
                padding: "5vw",
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#f1f1f1",
            }}
        >
            <a name={obj.id}></a>
            <Typography
                variant="h3"
                component="div"
                sx={{
                    color: "#000000",
                    fontFamily: "SEBANG_Gothic_Bold",
                    fontSize: "2.3vw",
                }}
            >
                {obj.title}
            </Typography>

            <ImageList
                sx={{
                    backgroundColor: index % 2 === 0 ? "#f1f1f1" : "#ffffff",
                    padding: "1vw",
                }}
                variant="woven"
                cols={3}
                // gap={"1vw"}
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
                    fontSize: "1.7vw",
                    fontWeight: "bold",
                }}
            >
                {obj.explain}
            </Typography>
        </Stack>
    );
}

export default Activity;

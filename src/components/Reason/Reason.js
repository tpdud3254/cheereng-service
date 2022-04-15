import ReasonItem from "./ReasonItem";
import { reasonInfo } from "./reasonInfo";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Reason() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Box
            sx={{
                textAlign: "center",
                backgroundColor: "#000000",
                backgroundSize: matches ? "contain" : "auto",
                width: "100vw",
                paddingTop: matches ? "" : "10vw",
                paddingBottom: matches ? "" : "10vw",
                backgroundColor: "#000000",
                backgroundImage: `url(${"/assets/images/common/brick_bg.png"})`,
            }}
        >
            {matches ? (
                <img
                    loading="lazy"
                    src="/assets/images/main/reason/reason.png"
                    style={{
                        width: "80%",
                        margin: "6vw",
                    }}
                ></img>
            ) : (
                <Stack
                    spacing={"10vw"}
                    justifyContent="center"
                    alignItems="center"
                >
                    <img
                        loading="lazy"
                        src="/assets/images/main/reason/title.png"
                        style={{
                            width: "70vw",
                            margin: matches ? "6vw" : "",
                        }}
                    ></img>

                    {reasonInfo.map((item, index) => (
                        <ReasonItem
                            key={index}
                            id={index}
                            title={item.title}
                            text={item.text}
                            imgUrl={item.imgUrl}
                        />
                    ))}
                </Stack>
            )}
        </Box>
    );
}

export default Reason;

import Course from "../../components/Course/Course";
import { courseInfo } from "../../components/Course/courseInfo";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Courses() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <Box
            sx={{
                backgroundColor: "#ffffff",
                width: matches ? "100%" : "unset",
                padding: matches ? 1 : "unset",
            }}
        >
            {courseInfo.map((item) => (
                <Course courseObj={item} />
            ))}
        </Box>
    );
}

export default Courses;

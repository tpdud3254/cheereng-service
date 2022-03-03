import Course from "../../components/Course/Course";
import { courseInfo } from "../../components/Course/courseInfo";
import { Box } from "@mui/material";
function Courses() {
    return (
        <Box sx={{ backgroundColor: "#ffffff", width: "100%", padding: 1 }}>
            {courseInfo.map((item) => (
                <Course courseObj={item} />
            ))}
        </Box>
    );
}

export default Courses;

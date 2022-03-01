import Course from "../../components/Course/Course";
import { courseInfo } from "../../components/Course/courseInfo";
function Courses() {
    return (
        <>
            {courseInfo.map((item) => (
                <Course courseObj={item} />
            ))}
        </>
    );
}

export default Courses;

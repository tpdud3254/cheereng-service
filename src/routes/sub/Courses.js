import Course from "../../components/Course";
import { courseInfo } from "../../components/courseInfo";
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

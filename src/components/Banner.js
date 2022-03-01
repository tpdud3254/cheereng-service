import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "../css/style.css";

function Banner() {
    return (
        <AwesomeSlider bullets={false} fillParent={false} className="aws-btn">
            <div data-src="/assets/images/Banner1_2.png" />
            <div data-src="/assets/images/Banner2_2.png" />
        </AwesomeSlider>
    );
}

export default Banner;

import Reason from "../components/Reason";
import Banner from "../components/Banner/Banner";
import Gallary from "../components/Gallary/Gallary";
import Introductions from "../components/Introductions";
import Counselling from "../components/Counselling/Counselling";
function Home() {
    return (
        <div style={{ width: "100vw" }}>
            <Banner />
            <Introductions />
            <Reason />
            <Gallary />
            <Counselling />
        </div>
    );
}

export default Home;

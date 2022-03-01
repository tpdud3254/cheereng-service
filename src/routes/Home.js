import Banner from "../components/Banner/Banner";
import Introductions from "../components/Introductions";
import Reason from "../components/Reason";
import Gallary from "../components/Gallary/Gallary";
import Counselling from "../components/Counselling/Counselling";
function Home() {
    return (
        <div>
            <Banner />
            <Introductions />
            <Reason />
            <Gallary />
            <Counselling />
        </div>
    );
}

export default Home;

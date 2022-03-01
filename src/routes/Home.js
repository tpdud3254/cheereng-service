import Banner from "../components/Banner";
import Introductions from "../components/Introductions";
import Reason from "../components/Reason";
import Gallary from "../components/Gallary";
import Counselling from "../components/Counselling";
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

import Reason from "../components/Reason/Reason";
import Banner from "../components/Banner/Banner";
import Gallary from "../components/Gallary/Gallary";
import Introductions from "../components/Profile/Introductions";
import Counselling from "../components/Counselling/Counselling";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
function Home() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <div style={{ width: "100vw" }}>
            <Banner />
            <Introductions />
            <Reason />
            <Gallary />
            {matches ? <Counselling /> : null}
        </div>
    );
}

export default Home;

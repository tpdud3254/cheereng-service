import { Avatar, Box } from "@mui/material";
import PropTypes from "prop-types";
import { profileInfo } from "./profileInfo";
import "../../css/font.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Profile({ profile, onClick, opacity, selected }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const name = profile.name;
    const summary = profile.summary;

    return (
        <Box
            sx={{
                opacity: selected === name ? 1 : opacity,
            }}
        >
            <Avatar
                alt={name}
                src={`/assets/images/main/profiles/main/${name}.png`}
                sx={{
                    width: "15vw",
                    height: "15vw",
                    marginBottom: "4vw",
                }}
                onClick={onClick}
            ></Avatar>

            <div
                style={{
                    color: "#ffffff",
                    fontFamily: "NanumSquareRound",
                    fontSize: "1.1vw",
                }}
            >
                {summary}
            </div>
        </Box>
    );
}

Profile.propTypes = {
    profile: PropTypes.object.isRequired,
};
export default Profile;
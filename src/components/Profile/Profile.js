import "../../css/font.css";
import PropTypes from "prop-types";
import { Avatar, Box } from "@mui/material";

function Profile({ profile, onClick, opacity, selected }) {
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
                    fontSize: "1rem",
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

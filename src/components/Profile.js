import { Avatar, Box } from "@mui/material";
import PropTypes from "prop-types";
import { profileInfo } from "./profileInfo";
import "../css/font.css";

function Profile({ profile, onClick, opacity, selected }) {
    const name = profile.name;
    const summary = profile.summary;

    return (
        <Box sx={{ opacity: selected === name ? 1 : opacity }}>
            <Avatar
                alt={name}
                src={`/assets/images/profiles/main/${name}.png`}
                sx={{
                    width: { xs: 250, sm: 250, md: 150, lg: 250 },
                    height: { xs: 250, sm: 250, md: 150, lg: 250 },
                    marginBottom: 5,
                }}
                onClick={onClick}
            ></Avatar>

            <div style={{ color: "#ffffff", fontFamily: "NanumSquareRound" }}>
                {summary}
            </div>
        </Box>
    );
}

Profile.propTypes = {
    profile: PropTypes.object.isRequired,
};
export default Profile;

import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import "../../css/font.css";

const Item = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: "1.2rem",
    height: "30px",
    fontWeight: "bold",
    textAlign: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    minWidth: 98,
    paddingLeft: "1vw",
    paddingRight: "1vw",
    borderRadius: 0,
    color: "#ffffff",
    fontFamily: "LeferiPoint-WhiteA",
    "&:hover": {
        background:
            "linear-gradient(-60deg, #f3f5f000 15%, #fff379 15%, #fff379 85%, #dfe8eb00 85%)",
        boxShadow: "none",
        color: "#31271c",
        opacity: 0.9,
    },
    "&:active": {
        boxShadow: "none",
        color: "#31271c",
        background:
            "linear-gradient(-60deg, #f3f5f000 15%, #fff37955 15%, #fff37955 85%, #dfe8eb00 85%)",
        opacity: 1,
    },
});

const useStyles = makeStyles(() => ({
    selected: {
        color: "#31271c",
        background:
            "linear-gradient(-60deg, #f3f5f000 15%, #fff379 15%, #fff379 85%, #dfe8eb00 85%)",
        opacity: 1,
    },
}));

function NavItem({ id, title, select }) {
    const classes = useStyles();
    return (
        <Link to={`/${id}`} style={{ textDecoration: "none" }}>
            <Item id={id} className={select ? classes.selected : null}>
                {title}
            </Item>
        </Link>
    );
}

export default NavItem;

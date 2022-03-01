import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import "../css/font.css";

const Item = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 17,
    height: "30px",
    textAlign: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    color: "#ffffff",
    fontFamily: "LeferiPoint-WhiteA",
    opacity: 0.8,
    "&:hover": {
        backgroundImage: `url(${"/assets/images/navbar_highlight.png"})`,
        boxShadow: "none",
        color: "#31271c",
        opacity: 0.7,
    },
    "&:active": {
        boxShadow: "none",
        backgroundColor: "#fff37955",
        color: "#31271c",
        backgroundImage: `url(${"/assets/images/navbar_highlight.png"})`,
        opacity: 1,
    },
});

const useStyles = makeStyles(() => ({
    selected: {
        color: "#31271c",
        backgroundImage: `url(${"/assets/images/navbar_highlight.png"})`,
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

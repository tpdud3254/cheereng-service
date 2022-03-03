import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const question = [
    "영어초보도 할 수 있나요?",
    "어떻게 진행되나요?",
    "서울에서만 진행되나요?",
    "OUTING CLASS는 어떤게 있나요?",
    "OUTING CLASS와 PARTY는 뭐가 다른가요?",
    "요일은 변경이 가능한가요?",
    "연령제한이 있나요?",
    "모임은 몇명이서 진행되나요?",
];

const answer = [
    "Welcome :) 왕초보, 왕왕초보, 알파벳만 읽을 줄 아시면 모두 다 가능하십니다.치어들이 잘 안내해줄테니 걱정말고 오세요!",
    "그룹수업, 채팅클라스, 파티, 줌, 아웃팅클라스 여러가지 다양한 활동들로 진행을 하고 있습니다. 자세한 사항은 치어에게 문의해 주세요.",
    "네! 아직은 서울에서만 진행하지만 경기도 수원, 천안 오픈 준비중에 있습니다.",
    "외국인 친구들과 함께 벚꽃구경, 한강나들이, 맛집투어 등등 시즌에 맞게 진행됩니다.",
    "OUTING CLASS는 1달에 한 번, PARTY는 분기 별로 진행됩니다.",
    "그룹수업 요일은 변경가능합니다. 다른 수업은 치어에게 문의 부탁드립니다.",
    "19세 이상 성인이라면 누구든지 가능합니다.",
    "모임은 보통 6~8명으로 진행됩니다.",
];

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    backgroundColor: "#ffffff00",
    color: "#ffffff",
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<AddIcon sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
))(({ theme }) => ({
    borderBottom: "1px solid #ffffff",
    backgroundColor:
        theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, .05)"
            : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(180deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
    },
    padding: 3,
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(5),
    borderBottom: "1px solid #ffffff",
}));

function Faqs() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const [expanded, setExpanded] = useState("");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <Box
            sx={{
                backgroundColor: "#000000",
                backgroundImage: `url(${"/assets/images/common/brick_bg.png"})`,
                paddingTop: matches ? "3vw" : "10vw",
                paddingBottom: matches ? "3vw" : "10vw",
            }}
        >
            <img
                src="/assets/images/sub/faq/faq_title.png"
                style={{ width: matches ? "15%" : "40vw" }}
            />

            <Box
                sx={{
                    padding: "3vw",
                    paddingLeft: "11vw",
                    paddingRight: "11vw",
                }}
            >
                {question.map((item, index) => (
                    <Accordion
                        expanded={expanded === `panel${index + 1}`}
                        onChange={handleChange(`panel${index + 1}`)}
                    >
                        <AccordionSummary
                            aria-controls={`panel${index + 1}d-content`}
                            id={`panel${index + 1}d-header`}
                            expandIcon={
                                expanded === `panel${index + 1}` ? (
                                    <RemoveIcon
                                        sx={{
                                            fontSize: "1.5rem",
                                            color: "#fff553",
                                        }}
                                    />
                                ) : (
                                    <AddIcon
                                        sx={{
                                            fontSize: "1.5rem",
                                            color: "#fff553",
                                        }}
                                    />
                                )
                            }
                        >
                            <Typography
                                sx={{
                                    fontFamily: "NEXON Lv2 Gothic Light",
                                    fontSize: matches ? "1.3rem" : "1rem",
                                }}
                            >
                                {item}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                sx={{
                                    backgroundColor: "#98979799",
                                    padding: "1vw",
                                    fontFamily: "LeferiPoint-WhiteA",
                                    fontSize: matches ? "1.3rem" : "1rem",
                                    borderLeft: "2px solid #c72117",
                                }}
                            >
                                {answer[index]}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
                <Typography
                    variant="subtitle2"
                    component="div"
                    sx={{
                        color: "#ffffff",
                        fontFamily: "LeferiPoint-WhiteA",
                        fontWeight: "bold",
                        fontSize: matches ? "1.3rem" : "1rem",
                        padding: matches ? "1vw" : "3vw",
                        paddingRight: 0,
                        textAlign: "right",
                    }}
                >
                    <a
                        href="http://pf.kakao.com/_ZWfxib"
                        style={{
                            textDecoration: "none",
                            color: "#ffffff",
                            cursor: "pointer",
                        }}
                    >
                        이곳에 없는 문의사항이 있다면?{" "}
                        <span
                            style={{
                                fontSize: matches ? "1.3rem" : "1rem",
                                fontFamily: "GyeonggiTitleM",
                                fontWeight: "bold",
                                color: "#fff000",
                            }}
                        >
                            &gt;{" "}
                        </span>
                    </a>
                </Typography>
            </Box>
        </Box>
    );
}

export default Faqs;

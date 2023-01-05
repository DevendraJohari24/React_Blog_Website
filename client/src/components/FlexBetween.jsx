import { Box } from "@mui/material";
import { display, styled } from "@mui/system";

const FlexBetween = styled(Box)(
    {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }
);

export default FlexBetween;
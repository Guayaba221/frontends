import { Container, Stack } from "@mui/material"

import GlobalComponents from "@/components/GlobalComponents"
import BridgeContextProvider from "@/contexts/BridgeContextProvider"
import useCheckViewport from "@/hooks/useCheckViewport"

import AnchorNavigation from "./AnchorNavigation"
import MobileAnchorNavigation from "./AnchorNavigation/mobile"
import Guidance from "./Guidance"
import Header from "./Header"
import SessionOneMarks from "./SessionOneMarks"
import SessionZeroMarks from "./SessionZeroMarks"
import SignatureRequestDialog from "./SignatureRequestDialog"
import TotalMarks from "./TotalMarks"

const Seesions = () => {
  const { isPortrait } = useCheckViewport()
  return (
    <BridgeContextProvider>
      <GlobalComponents></GlobalComponents>
      <Header></Header>
      <Container
        sx={{
          maxWidth: ["100% !important", "100% !important", "1272px !important"],
          display: "grid",
          gridTemplateColumns: ["1fr", "1fr", "max-content 1fr"],
          gap: "2.8rem",
          justifyContent: "center",
        }}
      >
        {!isPortrait && <AnchorNavigation></AnchorNavigation>}
        <Stack sx={{ gap: ["1.6rem", "2.4rem", "3.2rem"], mb: "6rem", maxWidth: "88.4rem" }}>
          <TotalMarks></TotalMarks>
          {isPortrait && <MobileAnchorNavigation></MobileAnchorNavigation>}
          <SessionOneMarks></SessionOneMarks>
          <SessionZeroMarks></SessionZeroMarks>
          <Guidance />
          <SignatureRequestDialog />
        </Stack>
      </Container>
    </BridgeContextProvider>
  )
}

export default Seesions

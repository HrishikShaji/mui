import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          bgcolor: "gray",
          color: "blue",
        }}
      >
        <Typography>HELLO</Typography>
      </Box>
    </main>
  );
}

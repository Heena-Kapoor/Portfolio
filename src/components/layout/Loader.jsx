import { useEffect, useState } from "react";
import { CircularProgress, Box } from "@mui/material";

const Loader = ({ loaderTimeout }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, loaderTimeout);

    return () => {
      clearTimeout(timeout);
    };
  }, [loaderTimeout]);

  return (
    show && (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional background
          zIndex: 9999,
        }}
      >
        <CircularProgress size={50} thickness={2} sx={{ color: '#d32f2f' }} />
      </Box>
    )
  );
};

export default Loader;

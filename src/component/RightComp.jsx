import React from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";

function RightComp() {
  return (
    <Grid item md={9}>
      <Typography variant="h3" sx={{ fontSize: "900", mt: 7, ml: 3 }}>
        Instructor Application Request
      </Typography>
      <Typography variant="h6" sx={{ ml: 3, mt: 6 }}>
        Please send me an application to become a Boater Education Instructor.
        Note - items marked with red square are required.
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography variant="h6" sx={{ mt: 3, ml: 3 }}>
          Subject:
        </Typography>
        <Box
          sx={{ width: 8, mt: 4, ml: 1, height: 8, backgroundColor: "red" }}
        />
      </Box>
      <TextField
        id="outlined-basic"
        size="small"
        InputProps={{ style: { fontSize: "1.6rem", margin: 0, padding: 0 } }}
        sx={{
          width: "480px",
          "& .MuiInputBase-root": { height: 40 },
          ml: 3,
          padding: 0,
          fontSize: "2rem",
          borderRadius: "none",
        }}
        variant="outlined"
        value="Boater Education Instructor Application Request"
      />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6" sx={{ mt: 3, ml: 3 }}>
          First Name:
        </Typography>
        <Box
          sx={{ width: 8, mt: 4, ml: 1, height: 8, backgroundColor: "red" }}
        />
      </Box>
      <TextField
        id="outlined-basic"
        size="small"
        InputProps={{ style: { fontSize: "1.6rem", margin: 0, padding: 0 } }}
        sx={{
          width: "480px",
          "& .MuiInputBase-root": { height: 40 },
          ml: 3,
          padding: 0,
          fontSize: "2rem",
          borderRadius: "none",
        }}
        variant="outlined"
      />
      <Typography variant="h6" sx={{ mt: 2, ml: 3 }}>
        Middle Initial:
      </Typography>
      <TextField
        id="outlined-basic"
        size="small"
        InputProps={{ style: { fontSize: "1.6rem", margin: 0, padding: 0 } }}
        sx={{
          width: "200px",
          "& .MuiInputBase-root": { height: 40 },
          ml: 3,
          padding: 0,
          fontSize: "2rem",
          borderRadius: "none",
        }}
        variant="outlined"
      />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6" sx={{ mt: 3, ml: 3 }}>
          Last Name:
        </Typography>
        <Box
          sx={{ width: 8, mt: 4, ml: 1, height: 8, backgroundColor: "red" }}
        />
      </Box>
      <TextField
        id="outlined-basic"
        size="small"
        InputProps={{ style: { fontSize: "1.6rem", margin: 0, padding: 0 } }}
        sx={{
          width: "480px",
          "& .MuiInputBase-root": { height: 40 },
          ml: 3,
          padding: 0,
          fontSize: "2rem",
          borderRadius: "none",
        }}
        variant="outlined"
      />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6" sx={{ mt: 3, ml: 3 }}>
          Date of Birth:
        </Typography>
        <Box
          sx={{ width: 8, mt: 4, ml: 1, height: 8, backgroundColor: "red" }}
        />
      </Box>
      <Typography variant="h6" sx={{ ml: 3, color: "grey" }}>
        Please enter your date of birth in following format (MM/DD/YYYY)
      </Typography>
      <TextField
        id="outlined-basic"
        size="small"
        InputProps={{ style: { fontSize: "1.6rem", margin: 0, padding: 0 } }}
        sx={{
          width: "480px",
          "& .MuiInputBase-root": { height: 40 },
          ml: 3,
          padding: 0,
          fontSize: "2rem",
          borderRadius: "none",
        }}
        variant="outlined"
      />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h6" sx={{ mt: 3, ml: 3 }}>
          Current Address:
        </Typography>
        <Box
          sx={{ width: 8, mt: 4, ml: 1, height: 8, backgroundColor: "red" }}
        />
      </Box>
      <TextField
        id="outlined-basic"
        size="small"
        InputProps={{ style: { fontSize: "1.6rem", margin: 0, padding: 0 } }}
        sx={{
          width: "480px",
          "& .MuiInputBase-root": { height: 40 },
          ml: 3,
          padding: 0,
          fontSize: "2rem",
          borderRadius: "none",
        }}
        variant="outlined"
      />
      <Grid container justifyContent="flex-start" alignItem="flex-end">
        <Grid item md={0.8}>
          <Typography
            variant="h6"
            sx={{ mt: 3, ml: 3, display: "block" }}
            noWrap
          >
            City:
          </Typography>
        </Grid>
        <Grid item md={3}>
          <Box
            sx={{ width: 8, mt: 4, ml: 1, height: 8, backgroundColor: "red" }}
          />
        </Grid>
      </Grid>
      <TextField
        id="outlined-basic"
        size="small"
        InputProps={{ style: { fontSize: "1.6rem", margin: 0, padding: 0 } }}
        sx={{
          width: "480px",
          "& .MuiInputBase-root": { height: 40 },
          ml: 3,
          padding: 0,
          fontSize: "2rem",
          borderRadius: "none",
        }}
        variant="outlined"
      />
    </Grid>
  );
}

export default RightComp;

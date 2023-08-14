import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const card = (
  <React.Fragment>
    <CardContent>
      {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography> */}
      <Typography variant="h5" component="div">
        Shift Allowance for Bristlecone
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Have any feedback?
        <br />
        <a
          class="github-button"
          href="https://github.com/adarshpawar29/shift-allowance/issues"
          data-size="large"
          aria-label="Issue adarshpawar29/shift-allowance on GitHub"
        >
          Issue
        </a>
        <br />
        Have any suggestions?
        <br />
        <a
          class="github-button"
          href="https://github.com/adarshpawar29/shift-allowance/discussions"
          data-size="large"
          aria-label="Discuss adarshpawar29/shift-allowance on GitHub"
        >
          Discuss
        </a>
      </Typography>
      <Typography variant="body2">
        Start filling out the information and hit Submit Button...
        <br />
        Note:
        {
          '"Once the table is generated, make sure to remove extra dates like PTO and public holidays by clicking remove button (far right in table)."'
        }
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

import React from 'react'
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  colorsConnect: {
    background:
      "linear-gradient(to right, black, red, orange, yellow, white)",
    paddingBottom: "16px",
    marginTop: "5px",
    marginBottom: "3px",
    outlineStyle: "solid",
    outlineWidth: "1px",
    outlineColor: "grey"
  },
  legend: {
      width: "175px",
    fontSize: "14px",
    fontWeight: 400
  }
});

export default function LegendSSCPT () {
  const classes = useStyles();

    return (
      <div>
        <div className={classes.legend}>
          <Grid container>

            <Grid item xs={12}>
              <body align="center">
                CSS (mg/L)
              </body>
            </Grid>

            <Grid item xs={12} >
              <div className={classes.colorsConnect}></div>
            </Grid>

            <Grid item xs={1}>
                  <body>Baixa</body>
            </Grid>

            <Grid item xs={9}>
            </Grid>

            <Grid item xs={1}>
                  <body>Alta</body>
            </Grid>

          </Grid>
        </div>
      </div>
    );
}


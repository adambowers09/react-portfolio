import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@material-ui/core/Grid";
import "../App.css";

export default function Projects() {
  return (
    <div>
      <br />
      <br />
      <br />
      <Grid
        container
        spacing={5}
        justifyContent="center"
        alignItems="center"
        
        xs={{
          flexDirection: "column",

        }}
      >
        <Grid item>
          <Card
            sx={{
              maxWidth: 330,
              minHeight: 420,
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
            }}
          >
            <CardMedia
              component="img"
              alt="screenshot"
              height="180"
              image="https://i.imgur.com/G2yUPpD.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Horiseon Refactor
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Horiseon refactor code. Assigned with debugging and
                consolidating code to follow standards and functionality.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large">
                <a href="https://adambowers09.github.io/CodeRefactor-Horiseon/">Click Here!</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
     

      
        <Grid item>
          <Card
            sx={{
              maxWidth: 330,
              minHeight: 420,
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
            }}
          >
            <CardMedia
              component="img"
              alt="screenshot"
              height="180"
              image="https://i.imgur.com/jZBWbM7.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Password Generator!
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Website will generate a secure passwore using confirms and prompts from a defined length that can include lowercase, uppercase, numbers, and symbols.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large">
                <a href="https://adambowers09.github.io/password-generator/">
                  Click Here!
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
    
      <Grid item>
        
          <Card
            sx={{
              maxWidth: 330,
              minHeight: 420,
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
            }}
          >
            <CardMedia
              component="img"
              alt="screenshot"
              height="180"
              image="https://i.imgur.com/0AWnBY4.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Run Buddy
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Website created with contact information, profiles of trainers,
                map extension and more!!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large">
                <a href="https://adambowers09.github.io/run-buddy/">
                  Click Here!
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
     
      <Grid item>
        <Card
          sx={{
            maxWidth: 330,
            minHeight: 420,
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
          }}
        >
          <CardMedia
            component="img"
            alt="screenshot"
            height="180"
            image="https://i.imgur.com/Bs9joko.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dinner Around the World!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Project 1: Simple web page that allows users to select different food/drink recipes.  Select cuisines from all over the world and liquor from a selective choice.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large">
              <a href="https://trane7.github.io/Console-This/">Click Here!</a>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card
          sx={{
            maxWidth: 330,
            minHeight: 420,
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
          }}
        >
          <CardMedia
            component="img"
            alt="screenshot"
            height="180"
            image="https://i.imgur.com/i7R2nV2.png"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Work Day Scheduler
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Application allows users to save tasks to be performed over a standard workday.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large">
              <a href="https://adambowers09.github.io/Work-Day-Scheduler/">Click Here!</a>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card
          sx={{
            maxWidth: 330,
              minHeight: 420,
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
          }}
        >
          <CardMedia
            component="img"
            alt="screenshot"
            height="180"
            image="https://i.imgur.com/1sjAOnv.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Weather Dashboard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Weather dashboard application that displays current weather conditions, five day forcasts, UV index, wind speed, humidity, and temperature from searched cities.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large">
              <a href="https://adambowers09.github.io/weatherdashboard/">
                Click Here!
              </a>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      </Grid>
    </div>
  );
}
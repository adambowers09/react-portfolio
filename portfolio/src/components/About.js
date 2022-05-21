import React from "react";
import {Card, CardMedia, Typography, CardContent, Box} from "@material-ui/core";

function About() {
  return (
    <Box
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 10,
          },
        }}>
    <Card
      sx={{
        maxWidth: 100,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        "& > *": {
          m: 3,
        },
      }}
      >
   <CardMedia />
     <CardContent>
     <Typography gutterBottom variant="h5" component="div">
      <h1>About</h1>
      </Typography>
      <Typography variant="body2" color="text.secondary">
      Welcome! My name is Adam Bowers and I am an aspiring Software/Developer from Greenville, North Carolina.  Right now, I work for U.S. Cellular as a Business Account Support Specialist however, I want to take my career in a new direction doing something I enjoy amd am passionate about.

      I grew up in a small town just outside of London, England and moved to theUnited States with my family as a teenageer.  I attended a Community College post High School and recieved my Associates Degree and started my career with U.S. Cellular.  When the pandemic hit I have begun working from home which allows me to maximize my free time which is another reason why I decided to take this deep dive into becoming a developer.

      When I'm not working I enjoy watching and playing all sports and spending time with my girlfriend and our two pets.  As long as I can remember technology has always been something that has attracted me but I never thought I could have a career in it until not.
      </Typography>
      </CardContent>
         
         
          </Card>
          </Box>

  );
}

export default About;
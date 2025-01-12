import React from "react";
import {Helmet} from "react-helmet";
import {Typography, Grid, Box} from "@material-ui/core";
import {NavigateNext as NavigateNextIcon} from "@material-ui/icons";

import MuiAlert from "@material-ui/lab/Alert";
import {AlertTitle} from "@material-ui/lab";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Home() {
  return (
    <div className="Home">
      <Helmet>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="China Delight Chinese Restaurant, Forest Hill, MD，Chinese Food, Fast delivery, Online coupon, Restaurant Review, Take Out, Eat in, Dine in, Online, Order, Online Order, Menu, Maryland, Harford County"
        />
        <meta
          name="description"
          content="China Delight Chinese Restaurant based in Forest Hill, Maryland. Serve the Bel Air, Fallston, and Jarrestville area. We do dine-in, carryout, and online orders!"
        />
        <meta name="author" content="Will Zhang" />
        <a href="https://www.chinadelightmd.com/menu"> Menu </a>
        <a href="https://www.chinadelightmd.com/dinner-combo"> Dinner </a>
        <a href="https://www.chinadelightmd.com/chef"> Specials </a>
        <a href="https://www.chinadelightmd.com/sides"> Sides </a>
        <a href="https://www.chinadelightmd.com/appetizers">Appetizers</a>
        <title> China Delight - Forest Hill, MD </title>
      </Helmet>
      <Typography component="div">
        <Box textAlign="center" m={1} py={8}>
          {/* HOME PAGE ALERT */}
          <Typography style={{paddingBottom: "80px"}}>
            <Alert
              severity="info"
              style={{background: "#B41E22", fontSize: "1.15rem"}}
            >
              <AlertTitle style={{fontSize: "1.25rem"}}>
                <strong> Holiday Hours Notice </strong>
              </AlertTitle>
              China Delight will be <strong> closed </strong> on Thanksgiving
              Day.
              <br />
              We will be <strong>open</strong> on Christmas Eve (Tuesday,
              December 24th), Christmas Day, and New Years Eve (Tuesday,
              December 31st) and New Years Day.
              <br />
              Thank you for understanding!
            </Alert>
          </Typography>
          <Typography
            variant="h3"
            style={{
              fontFamily: "Zhi Mang Xing, cursive",
            }}
            gutterBottom
          >
            晚餐时间
          </Typography>
          <Box py={1}></Box>
          <img
            src="https://media3.giphy.com/media/48PbiL2u5ZUU6HZf55/giphy.gif"
            alt="bg"
            className="homeImage"
            style={{backgroundSize: "cover"}}
          />
          {/* <Box className="imageContainer" textAlign="center">
            <div className="homeBg">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <a className="homeButton" size="large" href="/menu">
                    Order
                  </a>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <a className="homeButton" size="large" href="/lunch">
                    Lunch
                  </a>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <a className="homeButton" size="large" href="/dinner">
                    Dinner
                  </a>
                </Grid>
              </Grid>
            </div>{" "
          </Box> */}
          <Box py={2}></Box>
          <Typography variant="body1" gutterBottom>
            你好!~ Welcome the new China Delight website!
            <Typography variant="body1" gutterBottom></Typography>
            China Delight is a local Chinese cuisine take-out and dine-in
            restaurant in Forest Hill, MD.
          </Typography>
          <Typography variant="body1" gutterBottom></Typography>
          <Typography variant="subtitle" gutterBottom>
            <em> Disclaimer: The </em>
            <em>
              photos not exact replications of our dishes and are to serve as
              references.
            </em>
          </Typography>
          <Box py={4}></Box>
          <Box className="homeGallery">
            <Grid container spacing={4}>
              <Grid
                item
                xs={12}
                sm={4}
                className="homeMenuBtn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <a
                  className="homeButton"
                  size="large"
                  href="/menu"
                  style={{whiteSpace: "nowrap"}}
                >
                  Menu <NavigateNextIcon color="#ffe9c3" />
                </a>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                className="homeLunchBtn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <a
                  className="homeButton"
                  size="large"
                  href="/lunch"
                  style={{whiteSpace: "nowrap"}}
                >
                  Lunch <NavigateNextIcon color="#ffe9c3" />
                </a>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                className="homeDinnerBtn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <a
                  className="homeButton"
                  size="large"
                  href="/dinner-combo"
                  style={{whiteSpace: "nowrap"}}
                >
                  Dinner <NavigateNextIcon color="#ffe9c3" />
                </a>
              </Grid>
            </Grid>
          </Box>
          <Box py={8}> </Box>
          <Typography variant="body1" gutterBottom>
            <Typography variant="h3" gutterBottom>
              Hours
            </Typography>
            <Grid container spacing={3}>
              <Grid container item xs={6} justify="flex-end">
                Monday - Saturdays
              </Grid>
              <Grid container item xs={6}>
                11 AM - 9:30 PM
              </Grid>
              <Grid container item xs={6} justify="flex-end">
                Sundays
              </Grid>
              <Grid container item xs={6}>
                12 - 8:30
              </Grid>
              <Grid container item xs={6} justify="flex-end">
                Tuesdays
              </Grid>
              <Grid container item xs={6}>
                Closed
              </Grid>
            </Grid>
          </Typography>
          <Box py={2}> </Box>
          <Typography variant="body1" gutterBottom>
            <Typography variant="h3" gutterBottom>
              Contact
            </Typography>
            📞 PHONE: 410-877-9490 <br />
            📩 EMAIL:
            <a href="mailto:chinadelightmd@gmail.com">
              chinadelightmd@gmail.com
            </a>
          </Typography>
          <Box py={2}> </Box>
          <Typography variant="body1" gutterBottom>
            <Typography variant="h3" gutterBottom>
              Directions
            </Typography>
            📍 1E Newport Dr, Forest Hill, MD 21050
            <br />
            <em> On Rt. 24 (Rock Spring Road), right across Enotria </em>
            <Box py={1.5}> </Box>
            <iframe
              title="china delight map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.182788165903!2d-76.3879002845251!3d39.57803061414107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7deb7b8b012ab%3A0xd3e57330e03df815!2sChina%20Delight!5e0!3m2!1sen!2sus!4v1617983002384!5m2!1sen!2sus"
              width="960"
              height="600"
              style={{border: 0, maxWidth: "100%"}}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </Typography>
        </Box>
      </Typography>
    </div>
  );
}

export default Home;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import image1 from "../../../assets/img/milltes/kodo.jpeg"
import image2 from "../../../assets/img/milltes/foxTail.jpeg"
import image3 from "../../../assets/img/milltes/proso.jpeg"
import Carousel from "./Carousel";
import { Grid } from "@mui/material";
// import image1 from '../../../assets/img/menu/menu-item-2.png'
// import Row from '@mui/material/Row';
// import Col from '@mui/material/Col';
// import { Container, Row, Col, CardContent, Typography } from '@mui/material';

const MilletTypes = () => {
  return (
    <div>
      <Container>
        <Typography className="p-3" variant="h4" align="center" gutterBottom>
          Meet Millet Family
        </Typography>

        {/* <Card sx={{ marginBottom: "1rem" }}>
          <CardContent>
            <div>
              <Typography
                variant="h5"
                component="div"
                // color="white"
                align="center"
              >
                Finger Millet (Ragi)
              </Typography>
              <Typography variant="body1" paragraph>
                Also known as Ragi, the King of Millets, is a nutritious cereal
                that offers several health benefits. It is the most consumed
                millet across India. Ragi keeps your body cool even during
                scorching summer days, works as a natural weight loss agent, and
                prevents skin aging.
              </Typography>
            </div>

            <Typography variant="h4" paragraph>
              Nutritive Stats for 100g of Finger Millet:
            </Typography>

            <List>
              <ListItem>Protein: 5-8%</ListItem>
              <ListItem>Carbohydrates: 65-75%</ListItem>
              <ListItem>Dietary Fiber: 15-20%</ListItem>
              <ListItem>Minerals: 2.5-3.5%</ListItem>
              <ListItem>Calcium: 344mg%</ListItem>
              <ListItem>Potassium: 408mg%</ListItem>
              <ListItem>Unsaturated Fats: 1.3%</ListItem>
            </List>

            <Typography variant="h4" paragraph>
              Benefits of Ragi:
            </Typography>

            <List>
              <ListItem>Source of Protein</ListItem>
              <ListItem>Rich in Dietary Fiber</ListItem>
              <ListItem>Naturally Gluten-Free</ListItem>
              <ListItem>Source of Calcium for bone health</ListItem>
              <ListItem>Rich in Iron to increase hemoglobin</ListItem>
            </List> */}

<Card sx={{ marginBottom: '1rem' }}>
        <CardContent>
          <Grid container spacing={2}>
            {/* Left side content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h5" component="div" align="center">
                Finger Millet (Ragi)
              </Typography>
              <Typography variant="body1" paragraph>
                Also known as Ragi, the King of Millets, is a nutritious cereal that offers several health benefits. It is the most consumed millet across India. Ragi keeps your body cool even during scorching summer days, works as a natural weight loss agent, and prevents skin aging.
              </Typography>
              <Typography variant="h5" color="textSecondary" paragraph>
                Nutritive Stats for 100g of Finger Millet:
              </Typography>
              <List>
                <ListItem>Protein: 5-8%</ListItem>
                <ListItem>Carbohydrates: 65-75%</ListItem>
                <ListItem>Dietary Fiber: 15-20%</ListItem>
                <ListItem>Minerals: 2.5-3.5%</ListItem>
                <ListItem>Calcium: 344mg%</ListItem>
                <ListItem>Potassium: 408mg%</ListItem>
                <ListItem>Unsaturated Fats: 1.3%</ListItem>
              </List>
              <Typography variant="h5" color="textSecondary" paragraph>
                Benefits of Ragi:
              </Typography>
              <List>
                <ListItem>Source of Protein</ListItem>
                <ListItem>Rich in Dietary Fiber</ListItem>
                <ListItem>Naturally Gluten-Free</ListItem>
                <ListItem>Source of Calcium for bone health</ListItem>
                <ListItem>Rich in Iron to increase hemoglobin</ListItem>
              </List>
            </Grid>

            {/* Right side image (if needed) */}
            <Grid
              item
              xs={12}
              md={4}
              container
              justifyContent="center" // Center horizontally
              alignItems="center" // Center vertically
            >
              <img
                src={image1} // Replace with the actual image URL
                alt="Foxtail Millet"
                style={{ width: '100%', height: 'auto' }}
              />
            </Grid>
          </Grid>

            {/* <div className=" my-3 p-3 rounded-1 ">
              <Typography className="p-3" variant="h5" color="textSecondary" paragraph>
                Popular Recipes made with Ragi:
              </Typography>
              <div className="row">
                <div className="col-md-3">
                  <div>
                    <Typography
                      className="p-3 my-3"
                      style={{ fontSize: "x-large" }}
                    >
                      Ragi Dosa
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      className="p-3 my-3"
                      style={{ fontSize: "x-large" }}
                    >
                      Ragi Porridge
                    </Typography>
                  </div>
                  <div>
                    <Typography
                      className="p-3 my-3"
                      style={{ fontSize: "x-large" }}
                    >
                      Ragi Mudde
                    </Typography>
                  </div>
                </div>
                <div className="col-md-9">
                  <Carousel />
                </div>
              </div>
            </div> */}
          </CardContent>
        </Card>

        {/* Repeat the Card section for Foxtail Millet and Proso Millet */}
       

        <Card sx={{ marginBottom: '1rem' }}>
        <CardContent>
          <Grid container spacing={2}>
            {/* Left side content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h5" component="div" align="center">
                Foxtail millet
              </Typography>
              <Typography variant="body1" paragraph>
                There are over 200 species of millet, but the foxtail millet is the second-most widely planted. There is a broad cultivation of this plant in India, Africa, and China. Navane, Kakum, Korralu, and Tenai are some names given to foxtail millet.
              </Typography>
              <Typography variant="h5" color="textSecondary" paragraph>
                100 grams of Foxtail millet contains
              </Typography>
              <List>
                <ListItem>Protein: 11.3g</ListItem>
                <ListItem>Carbohydrates: 4.3g of fat, 60.2g of</ListItem>
                <ListItem>Energy: 351Kcal</ListItem>
                <ListItem>Minerals: 4g</ListItem>
                <ListItem>Fiber: 6.7g</ListItem>
                <ListItem>Iron: 2.8 mg</ListItem>
                <ListItem>Niacin: 32 mg</ListItem>
                <ListItem>Phosphorous: 290mg</ListItem>
                <ListItem>Calcium: 31mg of</ListItem>
              </List>
            </Grid>

            {/* Right side image */}
            <Grid
              item
              xs={12}
              md={4}
              container
              justifyContent="center" // Center horizontally
              alignItems="center" // Center vertically
            >
              <img
                src={image2} // Replace with the actual image URL
                alt="Foxtail Millet"
                style={{ width: '100%', height: 'auto' }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ marginBottom: '1rem' }}>
        <CardContent>
          <Grid container spacing={2}>
            {/* Left side content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h5" component="div" align="center">
                Proso Millet
              </Typography>
              <Typography variant="body1" paragraph>
                In terms of water requirements, proso millet is the simplest crop to cultivate. There is a substantial amount of carbohydrates and a significant amount of fat in this product. Additionally, this food contains phosphorus, manganese, iron, and potassium, as well as riboflavin, niacin, pyridoxine, and Vitamin E.
              </Typography>
              <Typography variant="h5" color="textSecondary" paragraph>
                100 grams of Proso millet contains
              </Typography>
              <List>
                <ListItem>Protein: 12.5%</ListItem>
                <ListItem>Dietary Fiber: 2.2g</ListItem>
                <ListItem>Iron: 5.9 mg</ListItem>
                <ListItem>Calcium: 0.01mg%</ListItem>
                <ListItem>Niacin B3 Mg: 2.3mg</ListItem>
              </List>
            </Grid>

          
           {/* Right side image */}
           <Grid
              item
              xs={12}
              md={4}
              container
              justifyContent="center" // Center horizontally
              alignItems="center" // Center vertically
            >
              <img
                src={image3} // Replace with the actual image URL
                alt="Proso Millet"
                style={{ width: '100%', height: 'auto' }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      </Container>
    </div>
  );
};

export default MilletTypes;

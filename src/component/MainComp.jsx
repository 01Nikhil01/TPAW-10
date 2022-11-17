import React from "react";
import {
  Button,
  List,
  ListItem,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RightComp from "./RightComp";
import { Grid } from "@mui/material";
function MainComp() {
  return (
    <>
      <Grid container columnSpacing={1} alignItems="center" justifyContent="center">
        <Grid container md={11} px={2}>
          <Grid item md={3}>
            <List sx={{ mx: 1  }}>
              <ListItem sx={{ borderBottom: "2px dotted #afafaf9f", py: 0, my: 0 }}>
                <Button startIcon={<ArrowRightIcon sx={{color: "grey",width: "2rem",height: "2rem",mr: -1.5}}/>}
                  sx={{fontWeight: 500,textTransform: "none",fontSize: "1.1rem",mx: 0}}>
                  Angler Education
                </Button>
              </ListItem>
              <ListItem
                sx={{borderBottom: "2px dotted #afafaf9f",py: 0,my: -1,py: 0,alignItems: "center"}}>
                <Button startIcon={<ArrowRightIcon sx={{color: "grey",width: "2rem",height: "2rem",mr: -1.5,}}/>}
                  sx={{fontWeight: 500,textTransform: "none",fontSize: "1.1rem",}}>
                  Archery
                </Button>
              </ListItem>
              <ListItem sx={{ borderBottom: "2px dotted #afafaf9f", py: 0, py: 0 }}>
                <Button startIcon={<ArrowRightIcon sx={{color: "grey",width: "2rem",height: "2rem",mr: -1.5,}}/>}
                  sx={{fontWeight: 500,textTransform: "none",fontSize: "1.1rem",my: 0}}>
                  Becoming an Outdoors-Woman
                </Button>
              </ListItem>
              <ListItem
                sx={{borderBottom: "2px dotted #afafaf9f",display: "flex",alignItems: "flex-start",flexDirection: "column",py: 0}}>
                <Button startIcon={<ArrowDropDownIcon sx={{color: "grey",width: "2rem",height: "2rem",mr: -1.5,}}/>}
                  sx={{fontWeight: 500,textTransform: "none",fontSize: "1.1rem",}}>
                  Boater Education
                </Button>
                <List sx={{ my: -3, mb: -1 }}>
                  <ListItem sx={{ my: -1.5, ml: 3 }}>
                    <Button sx={{fontWeight: 500,textTransform: "none",fontSize: "1.1rem"}}>
                      Boater Education
                    </Button>
                  </ListItem>
                  <ListItem sx={{ my: -3.5, ml: 3 }}>
                    <Button sx={{fontWeight: 500,textTransform: "none",fontSize: "1.1rem",}}>
                      Print a Certification Card
                    </Button>
                  </ListItem>
                  <ListItem sx={{ my: -3.5, ml: 3 }}>
                    <Button sx={{fontWeight: 500,textTransform: "none",fontSize: "1.1rem",}}>
                      Online Courses
                    </Button>
                  </ListItem>
                  <ListItem sx={{ my: -2.5, ml: 3 }}>
                    <Button sx={{fontWeight: 500,textTransform: "none",fontSize: "1.1rem"}}>
                      Boater Education FAQ
                    </Button>
                  </ListItem>
                  <ListItem sx={{ mt: 0, py: 0 }}>
                    <Button startIcon={<ArrowRightIcon sx={{color: "grey",width: "2rem",height: "2rem",mr: -1.5}}/>}
                      sx={{fontWeight: 500,textTransform: "none",fontSize: "1.1rem"}}>
                      Instructor Information
                    </Button>
                  </ListItem>
                  <ListItem sx={{ my: -1.5, py: 0, ml: 3 }}>
                    <Button sx={{fontWeight: 500,textTransform: "none",fontSize: "1.1rem"}}>
                      Classroom Resources
                    </Button>
                  </ListItem>
                  <ListItem sx={{ py: 0, ml: 3 }}>
                    <Button sx={{fontWeight: 500,textTransform: "none",fontSize: "1.1rem"}}>
                      Educational Resources
                    </Button>
                  </ListItem>
                  <ListItem sx={{ mt: -1.5, py: 0 }}>
                    <Button startIcon={<ArrowRightIcon sx={{color: "grey",width: "2rem",height: "2rem",mr: -1.5}}/>}
                      sx={{fontWeight: 500,textTransform: "none",fontSize: "1.1rem"}}>
                      Additional Resources
                    </Button>
                  </ListItem>
                  <ListItem sx={{ mt: -1.5, py: 0, ml: 3 }}>
                    <Button sx={{fontWeight: 500,textTransform: "none",fontSize: "1.1rem",wordWrap: "noWrap"}}>
                      Boater ED Certification
                    </Button>
                  </ListItem>
                  <ListItem sx={{ mt: -1.5, py: 0, ml: 3 }}>
                    <Button sx={{fontWeight: 500,textTransform: "none",fontSize: "1.1rem"}}>
                      Boater Education Publications
                    </Button>
                  </ListItem>
                  <ListItem sx={{ mt: -1.5, py: 0, ml: 3 }}>
                    <Button sx={{fontWeight: 500,textTransform: "none",fontSize: "1.1rem",}}>
                      Texas Water Safety Act
                    </Button>
                  </ListItem>
                  <ListItem sx={{ mt: -1.5, py: 0, ml: 3 }}>
                    <Button sx={{fontWeight: 500,textTransform: "none",fontSize: "1.1rem"}}>
                      Life Jackets
                    </Button>
                  </ListItem>
                  <ListItem sx={{ mt: -1.5, py: 0, ml: 3 }}>
                    <Button sx={{fontWeight: 500,textTransform: "none",fontSize: "1.1rem",}}>
                      Become a Boater Instructor
                    </Button>
                  </ListItem>
                  <ListItem sx={{ mt: -1, py: 0, ml: 3 }}>
                    <Button sx={{fontWeight: 500,textTransform: "none",fontSize: "1.1rem",color: "grey"}}>
                      Instructor Application Request
                    </Button>
                  </ListItem>
                </List>
              </ListItem>
              <ListItem sx={{ borderBottom: "2px dotted #afafaf9f", py: 0 }}>
                <Button startIcon={<ArrowRightIcon sx={{color: "grey",width: "2rem",height: "2rem",mr: -1.5}}/>}
                  sx={{fontWeight: 500,textTransform: "none",fontSize: "1.1rem"}}>
                  Educational Resources
                </Button>
              </ListItem>
              <ListItem sx={{ borderBottom: "2px dotted #afafaf9f", py: 0 }}>
                <Button
                  startIcon={
                    <ArrowRightIcon
                      sx={{
                        color: "grey",
                        width: "2rem",
                        height: "2rem",
                        mr: -1.5,
                      }}
                    />
                  }
                  sx={{
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: "1.1rem",
                  }}
                >
                  Get Outsides
                </Button>
              </ListItem>
              <ListItem sx={{ borderBottom: "2px dotted #afafaf9f", py: 0 }}>
                <Button
                  startIcon={
                    <ArrowRightIcon
                      sx={{
                        color: "grey",
                        width: "2rem",
                        height: "2rem",
                        mr: -1.5,
                      }}
                    />
                  }
                  sx={{
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: "1.1rem",
                  }}
                >
                  Hunter Education
                </Button>
              </ListItem>
              <ListItem sx={{ borderBottom: "2px dotted #afafaf9f", py: 0 }}>
                <Button
                  startIcon={
                    <ArrowRightIcon
                      sx={{
                        color: "grey",
                        width: "2rem",
                        height: "2rem",
                        mr: -1.5,
                      }}
                    />
                  }
                  sx={{
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: "1.1rem",
                  }}
                >
                  Project Wild
                </Button>
              </ListItem>
              <ListItem sx={{ borderBottom: "2px dotted #afafaf9f", py: 0 }}>
                <Button
                  sx={{
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    ml: 3,
                    my: 0,
                  }}
                >
                  Texas Buffalo Soldiers
                </Button>
              </ListItem>
              <ListItem sx={{ borderBottom: "2px dotted #afafaf9f", py: 0 }}>
                <Button
                  sx={{
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    ml: 3,
                  }}
                >
                  Education
                </Button>
              </ListItem>
            </List>
          </Grid>
         <RightComp />
        </Grid>
      </Grid>
    </>
  );
}

export default MainComp;

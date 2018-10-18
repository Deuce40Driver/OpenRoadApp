import React, { Component } from "react";
import "./Roadside.css";


class Roadside extends Component {

  state = {
     location: '',
     make: 'Chevrolet'
  };

  //buttonClick = () => {

  //};

  render() {
    return (
      <div>
        <div justify="center">
          <h1>Service Loactions Near You</h1>
        </div>

        <div>
          <iframe 
            title="map"
            width="800" 
            height="650" 
            frameborder="0" 
            src="https://www.google.com/maps/embed/v1/search?q=Chevrolet%20Service&zoom=10&key=AIzaSyBp-z-ZUT5h5B4JTSqlsycF7deqPty7Z8w" 
            allowfullscreen>
          </iframe>
        </div>


      </div>
    )
  };

};

export default Roadside;


/*
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
              Avatar with text and icon
            </Typography>
            <div className={classes.demo}>
              <List dense={dense}>
                {generate(
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Single-line item"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                    <ListItemSecondaryAction>
                      <IconButton aria-label="Delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>,
                )}
              </List>
            </div>
          </Grid>
*/

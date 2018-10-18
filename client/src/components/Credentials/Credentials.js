import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>

      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Important Information
        </Typography>
        <Typography variant="h5" component="h2">
          Auto Insurance
        </Typography>
        <Typography component="p">
          Company : State Farm
        </Typography>
        <Typography component="p">
          Policy Number: 123456789
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant="h5" component="h2">
          Health Insurance
        </Typography>
        <Typography component="p">
          Company : Anthem
        </Typography>
        <Typography component="p">
          Policy Number: 123456789
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant="h5" component="h2">
          Blood Type
        </Typography>
        <Typography component="p">
          Type : B+
        </Typography>
      </CardContent>

    </Card>

    
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
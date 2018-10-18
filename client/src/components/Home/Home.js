import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

//import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', 
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

const images = [
  {
    url: '/assets/images/profile.jpg',
    title: 'Profile',
    width: '33%',
    link: "/Profile",
  },
  {
    url: '/assets/images/roadside.jpg',
    title: 'Roadside',
    width: '34%',
    link: "/Roadside",
  },
  {
    url: '/assets/images/appointment.png',
    title: 'Appointment',
    width: '33%',
    link: "/Appointment",
  },
  {
    url: '/assets/images/diagnostics.jpg',
    title: 'Diagnostics',
    width: '33%',
    link: "/Diagnostics",
  },
  {
    url: '/assets/images/emergency.jpg',
    title: 'Emergency',
    width: '34%',
    link: "/Emergency",
  },
  {
    url: '/assets/images/chat.jpg',
    title: 'Chat',
    width: '33%',
    link: "/Chat",
  },
  {
    url: '/assets/images/credentials.jpg',
    title: 'Credentials',
    width: '33%',
    link: "/Credentials",
  },
  {
    url: '/assets/images/settings.png',
    title: 'Settings',
    width: '34%',
    link: "/Settings",
  },
  {
    url: '/assets/images/feedback.jpg',
    title: 'Feedback',
    width: '33%',
    link: "/Feedback",
  },
];

function ButtonBases(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          href={image.link}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>

        </ButtonBase>
      ))}
    </div>
  );
}

ButtonBases.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonBases);
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
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
});


  
  const CardItem = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  const { avatarSrc, title, subtitle, description, imgSrc } = props;


    return (
        <Card >
           <CardHeader
        avatar={
          <Avatar src={avatarSrc}/>
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon/>
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />

<CardMedia style={{height: "150px"}} image={imgSrc}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"

      />

          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="h2">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            {/* CARD BUTTONS BUY ECT  */}
            <Button size="small">Learn More</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      );
  }
 


export default CardItem;
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    margin: 20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const ListItem = (props) => {
  const { classes, data : { login, node_id, url, id}, onItemClick } = props;
  console.log(props)

  return (
    <div onClick={() =>onItemClick()}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} variant="title">
            login: {login}
          </Typography>
          <Typography className={classes.pos} variant="body2">
            note Id: {node_id}
          </Typography>
          <Typography color="textSecondary">
            url: {url}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

ListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItem);
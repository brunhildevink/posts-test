import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

// models
import { PostModel } from '../models/PostModel';

type Props = {
  post: PostModel;
  handleLikeIncrement: (id: number) => void;
  handleRemoveItem: (id: number) => void;
}

const useStyles = makeStyles((theme) => ({
  close: {
    marginLeft: "10px",
    transform: "rotate(45deg)"
  },
  image: {
    background: "url('https://via.placeholder.com/600/56a8c2') no-repeat center center",
    backgroundSize: "cover",
    height: "200px",
  },
  title: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    maxWidth: "400px", 
    height: "1.2em",
    whiteSpace: "nowrap"
  },
  itemContainer: {
    fontFamily: "roboto, sans serif",
    background: "#fff",
    borderRadius: "4px",
    margin: "20px 0",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    boxShadow: "0px 2px 6px 0px rgba(50, 50, 50, 0.1)",
    [theme.breakpoints.down('md')]: {
      margin: "0",
      marginTop: "20px",
      padding: "0"
    }
  },
  buttonGroup: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "flex-end"
  },
  likesContainer: {
    display: "flex",
    flexFlow: "column",
    textAlign: "center",
    fontWeight: "bold"
  },
  likes: {
    marginTop: "10px"
  }
}));

const Post = ({post, handleLikeIncrement, handleRemoveItem, ...props}: Props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.itemContainer}>
      <Grid item lg={2} xs={12} className={classes.image} />

      <Grid item lg={8} xs={12}>
        <h1 className={classes.title}>{post.title}</h1>
        <p>{post.body}</p>
      </Grid>

      <Grid item lg={2} xs={12} className={classes.buttonGroup}>
        <Grid item className={classes.likesContainer}>
          <Fab size="small" color="secondary">
            <FavoriteIcon onClick={() => handleLikeIncrement(post.id)}>Like</FavoriteIcon>
          </Fab>
          <span className={classes.likes}>{post.likes}</span>
        </Grid>
        
        <Grid item>
          <Fab size="small" color="primary" className={classes.close}>
            <AddIcon onClick={() => handleRemoveItem(post.id)}>Remove</AddIcon>
          </Fab>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Post;
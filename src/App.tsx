import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { Grid } from '@material-ui/core';

// models
import { PostModel } from './models/PostModel';

// components
import Header from './components/Header';
import Form from './components/Form';
import Post from './components/Post';

const useStyles = makeStyles((theme) => ({
  navbar: {
    [theme.breakpoints.up('md')]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }
  }
}));

function App() {
  const [data, setData] = useState<PostModel[]>([]);
  const [amountOfPosts, setAmountOfPosts] = useState<number>(0)
  const [error, setError] = useState<any>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const classes = useStyles();

  const amountPerPage = 4;

  useEffect(() => {
    fetchData();
  }, [currentPage])

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setAmountOfPosts(result.length)
        handlePostsGeneration(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }

  const handlePostsGeneration = (result: Array<any>) => {
    const newResult: Array<any> = [];

    const indexOfLastPost = currentPage * amountPerPage;
    const indexOfFirstPost = indexOfLastPost - amountPerPage;
    
    for(let i = 0; i < result.length; i++) {
      result[i].likes = i;
      newResult.push(result[i])
    }

    newResult.reverse();
    
    const currentPosts = newResult.slice(indexOfFirstPost, indexOfLastPost);
    const sortedData = currentPosts.sort((a, b) => (a.likes < b.likes) ? 1 : -1);
    
    setData(sortedData);
  }

  const handleRemoveItem = (id: number) => {
    const newPosts = [...data];
    const foundPost: any = newPosts.find(item => item.id === id);
    const index = newPosts.indexOf(foundPost);
    newPosts.splice(index, 1);
    setData(newPosts);
  }

  const handleLikeIncrement = (id: number) => {
    const newPosts = [...data];
    const foundPost: any = newPosts.find(item => item.id === id);
    if (foundPost) {
      foundPost.likes += 1;
    }
    const sortedData = newPosts.sort((a, b) => (a.likes < b.likes) ? 1 : -1);
    setData(sortedData) 
  }

  const handleSearchFilter = (e: any) => {
    e.preventDefault();
    const allPosts = [...data];
    const searchQuery = e.target[0].value.toLowerCase();
    if (searchQuery.length === 0) {
      fetchData();
    } else {
        const filteredPosts = allPosts.filter(post => {
          return post.title.toLowerCase().includes(searchQuery);
        });
        setData(filteredPosts);
    }
  }

  const handlePagination = (event: any, value: number) => {
    setCurrentPage(value);
  }

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return (
      <>
        <h1>Loading...</h1>
        <CircularProgress />
      </>
    ) 
  } else {
    return (
      <Container>
          <Header />
          <Grid className={classes.navbar}>
            <Grid item xs={12} lg={6}>
              <Pagination count={amountOfPosts / amountPerPage} onChange={handlePagination} />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Form handleSearchFilter={handleSearchFilter} />
            </Grid>
          </Grid>
          {
            data.map((item, index) => (
                <Post
                  key={index}
                  handleLikeIncrement={handleLikeIncrement}
                  handleRemoveItem={handleRemoveItem}
                  post={item}
                />
            ))
          }
      </Container>
    );
  }
}

export default App;

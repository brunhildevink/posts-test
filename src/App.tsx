import React, { useEffect, useState } from 'react';

// material UI
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

// models
import { PostModel } from './models/PostModel';

// components
import Header from './components/Header';
import Form from './components/Form';
import Post from './components/Post';

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end"
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  useEffect(() => {
    fetchData();
  }, [currentPage, fetchData])

  const handlePostsGeneration = (result: Array<any>) => {
    const newResult: Array<any> = [];

    const indexOfLastPost = currentPage * amountPerPage;
    const indexOfFirstPost = indexOfLastPost - amountPerPage;
    
    for(let i = 0; i < result.reverse().length; i++) {
      result[i].likes = i;
      newResult.push(result[i])
    }
    
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
  } else {
    return (
      <Container>
          <Header />
          <Grid item xs={12} className={classes.navbar}>
            <Pagination count={amountOfPosts / amountPerPage} onChange={handlePagination} />
            <Form handleSearchFilter={handleSearchFilter} />
          </Grid>
            {(!isLoaded ? Array.from(new Array(4)) : data).map((item, index) => (
              item ? (
                <Post
                  key={index}
                  handleLikeIncrement={handleLikeIncrement}
                  handleRemoveItem={handleRemoveItem}
                  post={item}
                />
              ) : (
                <Box>
                  <Skeleton animation="wave" width="100%" height={240} />
                </Box>
              )
            ))}
      </Container>
    );
  }
}

export default App;

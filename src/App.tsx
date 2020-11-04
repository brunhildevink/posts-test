import React, { useEffect, useState } from 'react';

// models
import { PostModel } from './models/PostModel';

// components
import Form from './components/Form';
import Post from './components/Post';

function App() {
  const [data, setData] = useState<PostModel[]>([]);
  const [error, setError] = useState<any>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        handleLikesGeneration(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }

  const handleLikesGeneration = (result: Array<any>) => {
    const newResult: Array<any> = [];

    result.forEach((item) => {
      const randomNumber = Math.floor((Math.random() * 10) + 1);
      item.likes = randomNumber;
      newResult.push(item)
    })

    const sortedData = newResult.sort((a, b) => (a.likes < b.likes) ? 1 : -1);

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

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="App">
        <Form handleSearchFilter={handleSearchFilter} />
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
      </div>
    );
  }
}

export default App;

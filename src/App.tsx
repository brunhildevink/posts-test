import React, { useEffect, useState } from 'react';

//models
import { PostModel } from './models/PostModel';

// components
import Post from './components/Post';

function App() {
  const [data, setData] = useState<PostModel[]>([]);
  const [error, setError] = useState<any>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="App">
        {data.map((item, index) => <Post key={index} post={item}/>)}
      </div>
    );
  }
}

export default App;

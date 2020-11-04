import React, { useState } from 'react';

//models
import { PostModel } from './models/PostModel';

// components
import Post from './components/Post';

function App() {
  const [data, setData] = useState<PostModel[]>([
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }
  ]);

  return (
    <div className="App">
      {data.map((item, index) => <Post key={index} post={item}/>)}
    </div>
  );
}

export default App;

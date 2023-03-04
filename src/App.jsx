import { useState } from 'react';

function App() {

  const [post, setPost] = useState({
    title: '',
    photo: null
  });

  return (
    <div>
      <h1>Node and React</h1>
      <form>
        <input type="text" placeholder="title" onChange={e => setPost({...post, title: e.target.value})}/>
        <input type="file" name='photo' onChange={(e) => setPost({...post, photo: e.target.files[0]})}/>
        <button>
          Subir
        </button>
      </form>
    </div>
  )
}

export default App

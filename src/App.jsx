import './App.css'

function App() {

  return (
    <div>
      <h1>Node and React</h1>
      <form>
        <input type="text" placeholder="title" />
        <input type="file" name='photo' onChange={(e) => console.log(e)}/>
        <button>
          Subir
        </button>
      </form>
    </div>
  )
}

export default App

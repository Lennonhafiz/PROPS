import React from 'react'
import NavBar from './component/NavBar'
import Todo from './component/Todo'
function App() {
  let title ="My activities to do for the week"
  return (
    <div>
      <NavBar title={title} />
      <main>
        <Todo title="learnig " datetime="15th August2022" />
        <Todo title="watching football " datetime="16th August2022" />
        <Todo title="jogging " datetime="17th August2022" />
        <Todo title="chatting " datetime="18th August2022" />
        <Todo title="sleep " datetime="19th August2022" />
        </main>
      </div>
  )
}

export default App

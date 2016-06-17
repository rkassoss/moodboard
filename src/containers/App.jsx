import React from 'react'
import { BoardsContainer } from './Boards'
import { CoversContainer } from './Covers'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

export class App extends React.Component {
  render () {
    return (
      <div>
        <CoversContainer />
        <BoardsContainer />
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(App)

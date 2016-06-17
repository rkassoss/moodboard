import React from 'react'
import { BoardsContainer } from '../containers/Boards'
import { CoversContainer } from '../containers/Covers'
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

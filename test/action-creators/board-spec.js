import { expect } from 'chai'
import { addToBoard, updateBoard, renameBoard, createBoard,
switchBoard, clearBoard, deleteCover } from '../../src/action-creators/board'

describe('addToBoard', () => {
  it('Returns an action with a type of ADD_TO_BOARD', () => {
    expect(addToBoard().type).to.equal('ADD_TO_BOARD')
  })
  it('Returns an action with a cover property', () => {
    expect(addToBoard('cover').cover).to.equal('cover')
  })
})
describe('updateBoard', () => {
  it('Returns an action with a type of UPDATE_BOARD', () => {
    expect(updateBoard().type).to.equal('UPDATE_BOARD')
  })
  it('Returns an action a cover property', () => {
    expect(updateBoard('cover').cover).to.equal('cover')
  })
})

describe('renameBoard', () => {
  it('Returns an action with a type of RENAME_BOARD', () => {
    expect(renameBoard().type).to.equal('RENAME_BOARD')
  })
  it('Returns an action with a name property', () => {
    expect(renameBoard('name').name).to.equal('name')
  })
})

describe('createBoard', () => {
  it('Returns an action with a type of CREATE_BOARD', () => {
    expect(createBoard().type).to.equal('CREATE_BOARD')
  })
  it('Returns an action with a name property', () => {
    expect(createBoard('name').name).to.equal('name')
  })
})

describe('switchBoard', () => {
  it('Returns an action with a type of SWITCH_BOARD', () => {
    expect(switchBoard().type).to.equal('SWITCH_BOARD')
  })
  it('Returns an action with a id property', () => {
    expect(switchBoard('id').id).to.equal('id')
  })
})

describe('clearBoard', () => {
  it('Returns an action with a type of CLEAR_BOARD', () => {
    expect(clearBoard().type).to.equal('CLEAR_BOARD')
  })
  it('Returns an action with no other properties', () => {
    expect(Object.keys(clearBoard()).length).to.equal(1)
  })
})

describe('deleteCover', () => {
  it('Returns an action with a type of DELETE_COVER', () => {
    expect(deleteCover().type).to.equal('DELETE_COVER')
  })
  it('Returns an action with a id property', () => {
    expect(deleteCover('id').id).to.equal('id')
  })
})

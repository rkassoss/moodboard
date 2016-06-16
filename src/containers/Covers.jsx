import React from 'react'
import { connect } from 'react-redux'
import Cover from '../components/Cover'
import { SearchCovers } from '../components/SearchCovers'
import * as actionCreators from '../action-creators/covers'

export class Covers extends React.Component {
  getCovers () {

    return this.props.covers.map((cover, idx) => {
      return <Cover key={idx}
                    id={idx}
                    top={0}
                    left={0}
                    onBoard={false}
                    image={cover.get('cover')}
                    hideSourceOnDrag={false} />
    })
  }
  render () {
    console.log(this.props.covers)
    return (
      <div>
        <SearchCovers searchCovers={this.props.searchCovers}/>
        <div className="covers">
          { this.getCovers() }
        </div>
      </div>

    )
  }
}

function mapStateToProps (state) {
  return {
    covers: state.get('covers')
  }
}

export const CoversContainer = connect(mapStateToProps, actionCreators)(Covers)

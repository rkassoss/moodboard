import React from 'react'
import { connect } from 'react-redux'
import Cover from '../components/Cover'
import { SearchCovers } from '../components/SearchCovers'
import * as actionCreators from '../action-creators/covers'

export class Covers extends React.Component {
  getCovers () {
    const { deleteCover, covers } = this.props
    return covers.map((cover, idx) => {
      return <Cover key={idx}
                    id={idx}
                    top={0}
                    left={0}
                    onBoard={false}
                    cover={cover}
                    hideSourceOnDrag={false}
                    deleteCover={deleteCover}
                    />
    })
  }
  render () {
    return (
      <div>
        <SearchCovers
          searchNewPage={this.props.searchNewPage}
          searchCovers={this.props.searchCovers}
          searchPage={this.props.searchPage}
          />
        <div className="covers">
          { this.getCovers() }
        </div>
      </div>

    )
  }
}

function mapStateToProps (state) {
  return {
    covers: state.get('covers'),
    searchPage: state.getIn(['requests', 'page'])
  }
}

export const CoversContainer = connect(mapStateToProps, actionCreators)(Covers)

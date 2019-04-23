import React, { Component } from 'react'
import Data from "./data"
import Previous from './previous'
import Next from './next'

class Display extends Component {

  constructor() {
    super()
    this.state = {
      data: [...Data],
      indexId: 0
    }
  }

  handleClickNext = () => {
    let index = this.state.indexId
    if (index < this.state.data.length - 1) {
      this.setState({
        indexId: this.state.indexId + 1
      })
    }
  }



  handleClickPrev = () => {
    let index = this.state.indexId
    if (index > 0) {
      this.setState({
        indexId: this.state.indexId - 1
      })
    }
  }

  render() {

    let movieList = this.state.data[this.state.indexId].favoriteMovies

    let movie = movieList.map((movie, i) => {
      return <li key={i}>{movie}</li>
    })

    return (
      <div>

        <div className="counter">{this.state.data[this.state.indexId].id}/{this.state.data.length}</div>

        <div className="name" > {this.state.data[this.state.indexId].name.first} {this.state.data[this.state.indexId].name.last}</div>

        <hr />

        <div className="location" ><strong>From:</strong> {this.state.data[this.state.indexId].city}, {this.state.data[this.state.indexId].country}</div>
        <div className="job-title" ><strong>Job Title:</strong> {this.state.data[this.state.indexId].title}</div>
        <div className="job-title"><strong>Employer</strong> {this.state.data[this.state.indexId].employer}</div>

        <br />

        <div className="favorite-Movies" key={this.state.indexId}><strong>Favorite Movies:</strong></div>
        <ol>
          {movie}
        </ol>

        <div className="navbar">
          <Previous task={this.handleClickPrev} />
          <span>
            <button>Edit</button>
            <button>Delete</button>
            <button>New</button>
          </span>
          <Next task={this.handleClickNext} />

        </div>

      </div >
    )
  }
}

export default Display


import React from 'react'
import helpers from './helper.js'
import StarDiv from './starDiv.jsx'



class StarRating extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      starArray: [],
      totalRating: 5
    }
  }

  async componentDidMount() {
    // this.generateStars()
    let starArray = await helpers.generateStars(this.props.rating, this.state.totalRating)
    //console.log(starArray)
    this.setState({ starArray: starArray })
  }

<<<<<<< HEAD
  async generateStars() {
    var fullStars = Math.floor(this.props.rating) // if rating 3.8 fullstars = 3
    var decimal = this.props.rating - fullStars

    //testing
    // var fullStars = Math.floor(3.8) //3
    // var decimal = (3.8 - fullStars) // 0.5 = 3 quarters star



    //console.log(fullStars, parseFloat(decimal.toFixed(1)))
    if (decimal !== 0) {
      var incompleteStar = await this.calculateIncompleteStar(parseFloat(decimal.toFixed(1)))
      // console.log('incomplete star:', incompleteStar)
      for (let i = 0; i < this.state.totalRating; i++) {
        if (i < fullStars) {

          this.state.starArray.push(1)
        }
        if (i === fullStars) {
          if (incompleteStar === 25) {

            this.state.starArray.push(0.25)

          } else if (incompleteStar === 50) {
            this.state.starArray.push(0.5)

          } else if (incompleteStar === 75) {
            this.state.starArray.push(0.75)

          }

        }
        if (i === fullStars + 1 || i < this.state.totalRating.length) {
          this.state.starArray.push(0)
        }
      }
      //console.log(this.state.starArray)
    } else {
      for (let i = 0; i < this.state.totalRating; i++) {
        if (i < fullStars) {

          this.state.starArray.push(1)
        }
        if (i >= fullStars || i < this.state.totalRating.length) {
          this.state.starArray.push(0)
        }

      }
      //console.log(this.state.starArray)
    }
  }

  calculateIncompleteStar(decimal) {
    // first quarter
    if (decimal < 0.5) {
      return 25;
    } else if (decimal >= 0.5 && decimal < 0.75) { // half
      return 50
    } else if (decimal >= 0.75 && decimal < 1) {  // 3 quarters
      return 75
    }
  }


  render() {
    // console.log('starArr', this.state.starArray)
    return (
      <div className="star-bar">
        {this.state.starArray.map((width, idx) => {
          // console.log('width', width)

          return (
            <div className="star-container" key={idx}>
              <div className="star-fill" style={{ "width": `${(width * 21)}px` }}>
                <img className="star-outline" alt="star-image" src="star.png"></img>
              </div>
            </div>
          );
        })
        }
=======
  render() {
    //console.log('star array in review item: ', this.state.starArray)
    return (
      <div className="star-bar">
        <StarDiv starArray={this.state.starArray} />
>>>>>>> master
      </div>
    )
  }


}

export default StarRating

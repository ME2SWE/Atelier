import React from 'react';
import ReviewItem from './reviewItem.jsx'
import SortMenu from './sorting/sorting.jsx'
import NewReviewModal from './newReview/newReviewModal.jsx'


class reviewList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewDataCopy: [],
      displayReview: [],
      loadBtn: false,
      newReviewModal: true


    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.reviewDataCopy.length !== this.props.reviewData.length) {
      this.setState({
        reviewDataCopy: this.props.reviewData,
        displayReview: [this.props.reviewData[0], this.props.reviewData[1]]
      })
      if (this.props.reviewData.length > 2) {
        // console.log('length:', this.props.reviewData.length)
        this.setState({
          loadBtn: true
        })
      }
    }

    if (prevProps.reviewData !== this.props.reviewData) {
      this.setState({ reviewDataCopy: this.props.reviewData }, () => {
        this.setState({
          reviewDataCopy: this.props.reviewData,
          displayReview: [this.props.reviewData[0], this.props.reviewData[1]]
        })
      })
    }

  }


  handleMoreReviewClick() {
    var currentReviewIdx = this.state.displayReview.length //2
    //console.log(currentReviewIdx)
    var newDisplayReview = this.state.displayReview
    if (this.state.reviewDataCopy.length > newDisplayReview.length) {
      for (let i = 0; i < 2; i++) {
        newDisplayReview.push(this.state.reviewDataCopy[currentReviewIdx])
        currentReviewIdx++
      }

      this.setState({
        displayReview: newDisplayReview
      })
    } else if (this.state.reviewDataCopy.length === newDisplayReview.length) {
      this.setState({
        loadBtn: false
      })
    }
  }

  updateSortMethod(sortMethod) {
    this.props.updateSortMethod(sortMethod)
    this.setState({
      sortValueTracker: sortMethod
    })

  }

  handleAddReviewClick() {
    this.setState({
      newReviewModal: true
    })
    this.props.addNewReview()
  }

  handleCloseReviewModal() {
    this.setState({
      newReviewModal: !this.state.newReviewModal
    })
  }



  render() {
    //console.log('reviewlist received: ', this.props.reviewData)
    const datalength = this.props.reviewData.length
    return (
      <div className="reviewBreakdown">
        <div className="review-sort-bar" data-testid='review-amount'>{`${datalength} reviews, sorted by `}{datalength > 0 ? <SortMenu currentSortValue={this.props.currentSortValue} updateSortMethod={this.updateSortMethod.bind(this)} /> : null}</div>
        <div className="reviewItemContaier">
          <div className="container-Content">
            {Array.isArray(this.state.displayReview) && datalength > 0 ? this.state.displayReview.map((item) =>
              <ReviewItem reviewData={item} key={item.review_id} />
            ) : null}
          </div>
        </div>
        {this.state.loadBtn ?
          <button className="loadReviewBtn" data-testid="moreReviewBtn-testId" onClick={() => { this.handleMoreReviewClick() }}>MORE REVIEWS</button> : null}
        <button className="addReviewBtn" data-testid="addReviewBtn-testId" onClick={() => this.handleAddReviewClick()}>ADD A REVIEW +</button>
        {this.state.newReviewModal ?
          <NewReviewModal handleCloseReviewModal={this.handleCloseReviewModal.bind(this)} productName={this.props.productName} characteristics={this.props.characteristics} /> :
          null}
      </div>



    )
  }

}

export default reviewList
import { offerMockPropsType } from "../ts_types"
import { Review } from "../review/review"
import { offerType } from "../mocks/offers"
import { reviewType } from "../mocks/reviews"
export const ReviewList = ({offerMock}:offerMockPropsType) => {
    return(
        <ul className="reviews__list">
            {offerMock.reviews.map((review:reviewType) =>  <Review key={review.key} review={review}/>  )}
        </ul>
    )
}
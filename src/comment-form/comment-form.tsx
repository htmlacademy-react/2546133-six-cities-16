import { useState } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { StateType } from '../reducer';
import { useDispatch } from 'react-redux';
import { postComments } from '../action';
import { DispatchType } from '../ts_types';

export const CommentForm = () => {

  const useAppDispatch = () => useDispatch<DispatchType>();
  const dispatch = useAppDispatch();
  const inputComment = useRef<HTMLTextAreaElement | null>(null);
  const currentOffer = useSelector((state:StateType)=>state.currentOffer);

  /*const defaultCommentState:commentStateType = {
    rating: 0,
    review: ''
  };*/
  const [rating, setRating] = useState(0);
  return(
    <form onSubmit={(evt:React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      if (currentOffer && inputComment.current) {

        dispatch(postComments({id:currentOffer.id, commentObj: {comment: inputComment.current.value, rating: rating }}));
      }
    }} className="reviews__form form" method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review </label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={()=>{
          setRating(5);
        }}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={()=>{
          setRating(4);
        }}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={()=>{
          setRating(3);
        }}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={()=>{
          setRating(2);
        }}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={()=>{
          setRating(1);
        }}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" ref={inputComment}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
};

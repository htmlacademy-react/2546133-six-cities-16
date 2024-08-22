import { useState } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { StateType } from '../reducer';
import { useDispatch } from 'react-redux';
import { postComments } from '../action';
import { DispatchType } from '../ts_types';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CommentForm = () => {

  const useAppDispatch = () => useDispatch<DispatchType>();
  const dispatch = useAppDispatch();
  const inputComment = useRef<HTMLTextAreaElement | null>(null);

  const currentOffer = useSelector((state:StateType)=>state.currentOffer);


  const [rating, setRating] = useState(0);
  const [isFormLocked, setIsFormLocked] = useState(false);
  const [isBtnLocked, setIsBtnLocked] = useState(true);


  const sendForm = async (evt:React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (currentOffer && inputComment.current) {
      setIsFormLocked(true);
      setIsBtnLocked(true);
      const data = await dispatch(postComments({id:currentOffer.id, commentObj: {comment: inputComment.current.value, rating: rating }}));
      if (data.type !== '/data/post_comments/fulfille1d') {
        toast('Error sending comment');
      } else {
        inputComment.current.value = '';
        setRating(0);
      }
      setIsFormLocked(false);
      setIsBtnLocked(true);


    }
  };
  const validateForm = (ratingAct:number) => {
    if (inputComment.current) {
      if (ratingAct === 0 || inputComment.current.value.length < 50 || inputComment.current.value.length > 300) {
        setIsBtnLocked(true);
      } else {
        setIsBtnLocked(false);
      }
    }
  };

  return(

    <form onSubmit={(evt:React.FormEvent<HTMLFormElement>) => {
      sendForm(evt);
    }} className="reviews__form form" method="post"
    >
      <div>
        <ToastContainer/>
      </div>
      <label className="reviews__label form__label" htmlFor="review">Your review </label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" checked={(rating === 5)} onClick={()=>{
          setRating(5); validateForm(5);
        }}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" checked={(rating === 4)} onClick={()=>{
          setRating(4); validateForm(4);
        }}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" checked={(rating === 3)} onClick={()=>{
          setRating(3); validateForm(3);
        }}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input  visually-hidden" name="rating" value="2" id="2-stars" type="radio" checked={(rating === 2)} onClick={()=>{
          setRating(2); validateForm(2);
        }}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" checked={(rating === 1)} onClick={()=>{
          setRating(1); validateForm(1);
        }}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" disabled={isFormLocked} placeholder="Tell how was your stay, what you like and what can be improved" ref={inputComment}
        onKeyUp={() => {
          validateForm(rating);
        }}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" disabled={isBtnLocked} type="submit">Submit</button>
      </div>
    </form>
  );
};

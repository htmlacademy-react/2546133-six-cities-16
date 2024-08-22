import { Review } from '../review/review';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchComments } from '../action';
import { DispatchType, StateType, CommentType } from '../ts_types';
import { useSelector } from 'react-redux';
import { Spiner } from '../spinner/spiner';
export const ReviewList = () => {
  const useAppDispatch = () => useDispatch<DispatchType>();
  const dispatch = useAppDispatch();
  const currentOffer = useSelector((state: StateType) => state.currentOffer);
  const comments = useSelector((state: StateType) => state.comments);

  useEffect(() =>{

    if (currentOffer) {
      dispatch(fetchComments(currentOffer.id));
    }
  }, []);
  if(!comments) {
    return (<Spiner/>);
  }
  return (
    <ul className="reviews__list">
      {comments.slice(0,10).map((review:CommentType) => <Review key={review.id} review={review}/>)}
    </ul>
  );

};

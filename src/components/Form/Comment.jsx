import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function CommentInput() {
  const dispatch = useDispatch();
  const history = useHistory();
  const commentInput = useSelector(store => store.commentInput);

  const handleChange = (event) => {
    const action = {
      type: 'SET_COMMENT',
      payload: event.target.value
    };
    dispatch(action);
  }

  const nextPage = () => {
    history.push('/review-step-5');
  }

  return(
    <>
      <h3>If you have any comments or have any ideas on how we can improve, please let us know!</h3>
      <textarea onChange={handleChange} placeholder="Leave your comments here!" />
      <button onClick={nextPage} >Next</button>
    </>
  )
}

export default CommentInput;
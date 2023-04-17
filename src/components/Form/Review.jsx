import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function ReviewPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const feelingInput = useSelector(store => store.feelingInput);
  const understandingInput = useSelector(store => store.understandingInput);
  const supportInput = useSelector(store => store.supportInput);
  const commentInput = useSelector(store => store.commentInput);

  const nextPage = () => {
    axios.post('/feedback-server', {
      feeling: feelingInput,
      understanding: understandingInput,
      support: supportInput,
      comments: commentInput
    }).then((response) => {
      const action = {type: 'CLEAR_FORM'};
      dispatch(action);
      console.log('Cleared')
    }).catch((error) => {
      console.log(`Error in axios POST: ${error}`);
      alert(`Something went wrong.`);
    })
    
    console.log(`Gonna push history`);
    history.push('/thank-you-final-step');
  }

  return(
    <>
      <h3>Please review your Feedback.</h3>
      {feelingInput}
      <br />
      {understandingInput}
      <br />
      {supportInput}
      <br />
      {commentInput}
      <br />
      <button onClick={nextPage} >Submit</button>
    </>
  )
}

export default ReviewPage;
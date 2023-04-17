import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function SupportInput() {
  const dispatch = useDispatch();
  const history = useHistory();
  const supportInput = useSelector(store => store.supportInput);

  const handleChange = (event) => {
    const action = {
      type: 'SET_SUPPORT_RATING', 
      payload: event.target.value
    };
    dispatch(action);
  }

  const nextPage = () => {
    if (supportInput > 0 && supportInput < 6) {
      history.push('/comment-step-4');
    } else {
      alert(`Please enter a number between 1 and 5.`);
      return;
    }
  }

  return(
    <>
      <h3>On a scale from 1 to 5, how supported did you feel today?</h3>
      <input onChange={handleChange} type="number" placeholder="Please leave a rating" required />
      <button onClick={nextPage} >Next</button>
    </>
  )
}

export default SupportInput;
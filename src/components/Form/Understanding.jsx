import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function UnderstandingInput() {
  const dispatch = useDispatch();
  const history = useHistory();
  const understandingInput = useSelector(store => store.understandingInput);

  const handleChange = (event) => {
    const action = {
      type: 'SET_UNDERSTANDING_RATING',
      payload: event.target.value
    };
    dispatch(action);
  }

  const nextPage = () => {
    if (understandingInput > 0 && understandingInput < 6) {
      history.push('/support-page-3');
    } else {
      alert(`Please input a number between 1 and 5.`);
      return;
    }
  }

  return(
    <>
      <h3>On a scale from 1 to 5, how well are you understanding the content?</h3>
      <input onChange={handleChange} type="number" required/>
      <button onClick={nextPage} >Next</button>
    </>
  )
}

export default UnderstandingInput;
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function FeelingInput() {
  const dispatch = useDispatch();
  const history = useHistory();
  const feelingInput = useSelector(store => store.feelingInput);

  const setFeeling = (event) => {
    const action = {
      type: 'SET_FEELING_RATING', 
      payload: event.target.value
    };
    dispatch(action);
  }

  const nextPage = () => {
    if (feelingInput > 0 && feelingInput < 6) {
      history.push('/understanding-page-2');
    } else {
      alert(`Please enter a value between 1 to 5.`);
      return;
    }
  }

  return(
    <>
      <h3>On a scale from 1 to 5, how are you feeling?</h3>
      <input onChange={setFeeling} type="number" required/>
      <button onClick={nextPage} >Next</button>
    </>
  )
}

export default FeelingInput;
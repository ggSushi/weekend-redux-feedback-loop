import {useHistory} from 'react-router-dom';

function ThankYou() {
  const history = useHistory();

  const sendToFeedback = () => {
    history.push("/");
  }

  return(
    <>
      <h3>Thank you!</h3>
      <button onClick={sendToFeedback} >Leave new Feedback!</button>
    </>
  )
}

export default ThankYou;
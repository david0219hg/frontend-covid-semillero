
import AWS from 'aws-sdk';
const sendMessage = () =>{
  AWS.config.update({region: 'us-east-1'});
  var params = {
    Message: 'prueba codigo', /* required */
    TopicArn: 'arn:aws:sns:us-east-1:410282579039:semillero_prueba'
  };
  var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

  publishTextPromise.then(
    function(data) {
      console.log(`Message ${params.Message} sent to the topic ${params.TopicArn}`);
      console.log("MessageID is " + data.MessageId);
    }).catch(
      function(err) {
      console.error(err, err.stack);
    });
}



export default function App() {
  return (
    <>
    <h1> Hola Semillero </h1>
    <button onClick={sendMessage}> mandar correo </button>   
    </>
  );
}
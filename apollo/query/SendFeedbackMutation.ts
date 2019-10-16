import {gql} from "apollo-boost";


export const SendFeedbackMutation = gql`
    mutation($feedback: FeedbackInput!){
        sendFeedback(
            feedback:$feedback
        ){
            answer
        }
    }
`;

import {gql} from "apollo-boost";


// form: String
// For correct aggregation. Need form id.
//
// name: String
// email: String
// phone: String
// city: String
// url: String
// file: String
// date: DateTime!

export const SendFeedbackMutation = gql`
    mutation(
        $form: String,
        $name: String,
        $email: String,
        $phone: String,
        $city: String,
        $url: String,
        $file: String,
        $date: DateTime!
    ){
        sendFeedback(
            feedback:{
                form:$form,
                name:$name,
                email:$email,
                phone:$phone,
                city:$city,
                url:$url,
                file:$file,
                date:$date,
            }
        ){
            answer
        }
    }
`;

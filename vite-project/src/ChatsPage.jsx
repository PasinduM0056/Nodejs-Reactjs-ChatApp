import {PrettyChatWindow} from 'react-chat-engine-pretty'


const ChatsPage = (props) => {
    return (
    <div style={ {height: '100vh'}}>
    <PrettyChatWindow
         projectId='37b3330b-4332-41a8-a733-b5b4ae881edf'
         username={props.user.username}
         secret={props.user.secret}
         style={{height: '100%'}}
     />    
 </div>
    
    );
   
};

export default ChatsPage;
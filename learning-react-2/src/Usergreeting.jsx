import PropTypes from "prop-types"
function userGreeting(props) {

    const welcomeMessage = <h2 className="welcome-message">
                            Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">
                        Please Sign in to Continue</h2>


    return (props.loggedIn ? welcomeMessage : loginPrompt);
}
userGreeting.PropTypes = {
    loggedIn : PropTypes.bool,
    username : PropTypes.string,
}
userGreeting.defualtProps = {
    loggedIn : false,
    username : "Guest"
}
export default userGreeting
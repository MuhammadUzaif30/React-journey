import Student from "./Student";
function App() {
    return (
        <>
        <Student name = "Spongebob" age = {30} isStudent = {true} />
        <Student name = "Patrick" age = {20} isStudent = {true} />
        <Student name = "Squidward" age = {40} isStudent = {true} />
        <Student name = "Sandy" age = {30} isStudent = {false} />
        <Student/>
        
        </>
    );
}
export default App
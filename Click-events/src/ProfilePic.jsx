function ProfilePic () {
    const imageurl = './src/assets/ninjago.webp'

    const handleClick = (e) => e.target.style.display = "none";
    return(<img onClick={(e) => handleClick(e)} src={imageurl}></img>);
}
export default ProfilePic
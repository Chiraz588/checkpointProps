
import PropTypes from "prop-types";
const Profile = (props) => {
    return (
        <div>
            <h1>{props.fullname}</h1><br/>
            <h3>{props.profession}</h3><br/>
            <h4>{props.bio}</h4><br/>
            <button onClick = {props.message} style={{backgroundColor:'Black',color:'white',border:'none', padding:'8px 20px'}}>it's me</button><br/>
            <br/>
        </div>
    )
}
Profile.defaultProps={age:23}
Profile.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    age: PropTypes.number,
    message: PropTypes.func
   };
  export default Profile
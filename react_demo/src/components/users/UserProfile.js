import { useParams } from "react-router-dom";


function UserProfile() {
    console.log('useParams()', useParams());

    const { id } = useParams();
    console.log('IDDD', id);

    return console.log('iddd', id);
}

export default UserProfile;
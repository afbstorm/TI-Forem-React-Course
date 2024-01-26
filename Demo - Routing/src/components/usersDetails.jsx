import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";


const UsersDetails = () => {

    const { userId } = useParams();
    const [ user, setUser ] = useState('');

    useEffect(() => {
        if (userId === '42') {
            setUser('Grimgor Ironhide the plague of the old world')
        }
    }, [userId])

    return (
        <div>
            <h2>{user}</h2>
        </div>
    )
}

export default UsersDetails;
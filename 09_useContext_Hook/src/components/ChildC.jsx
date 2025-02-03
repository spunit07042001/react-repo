import  { useContext } from 'react';
import { UserContext } from '../App'; // Import the context

const ChildC = () => {
    const user = useContext(UserContext); // Step 3: Consume the context

    return (
        <div>
            Data: {user.name}
        </div>
    );
};

export default ChildC;

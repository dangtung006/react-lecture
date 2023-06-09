import { useEffect, useCallback, useState } from "react";

const UseCallback = () => {
    const [user, setUser] = useState(null);
    const getUser = useCallback(() => {
        fetch("https://randomuser.me/api/").then(r => r.json()).then(json => setUser(json.results[0]))
    }, [])

    useEffect(() => {
        console.log("get user");
        getUser();
    }, [getUser])

    return (
        <div>
            <button onClick={getUser}>getUser</button>
            {
                user && (
                    <div>
                        <img src={user.picture.medium} />
                        <p>
                            {user.name.first} {user.name.last}
                        </p>

                    </div>
                )
            }

        </div>
    )
}

export default UseCallback;
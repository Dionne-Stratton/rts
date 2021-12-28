import { stringify } from "querystring";
import { useState } from "react";

const users = [
    {name: 'Nathan', age: 30},
    {name: 'Dionne', age: 40},
    {name: 'Matthew', age: 39}
]

const UserSearch: React.FC = () => {
    const [name, setName] = useState('')
    const [user, setUser] = useState<{name: string, age: number} | undefined> ()

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name
        })

        setUser(foundUser)
    }

    return <div>
        User Search
        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={onClick}>Find User</button>
        <div>
            {user && user.name /*only calls user.name if user is truthy*/} 
            {user && user.age}
        </div>
    </div>
}

export default UserSearch
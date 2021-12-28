import { useState, useRef, useEffect } from "react";

const users = [
    {name: 'Nathan', age: 30},
    {name: 'Dionne', age: 40},
    {name: 'Matthew', age: 39}
]

const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('')
    const [user, setUser] = useState<{name: string, age: number} | undefined> ()

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    useEffect(() => {
        if (!inputRef.current){
            return;
        }
        inputRef.current.focus()
    }), [];

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name
        })

        setUser(foundUser)
    }

    return <div>
        User Search
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
        <button onClick={onClick}>Find User</button>
        <div>
            {user && user.name /*only calls user.name if user is truthy*/} 
            {user && user.age}
        </div>
    </div>
}

export default UserSearch
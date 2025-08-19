import React, {useState, useEffect} from 'react'
import axios from "axios"

type Props = {}

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: string;
}

const API_URL = import.meta.env.VITE_API_URL;

function UsersList({}: Props) {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get<User[]>(`${API_URL}/user/all`);
                setUsers(res.data);
            } catch (err) {
                setError("Failed to fetch users");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return (
        <div className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );

    if (error) return <p>{error}</p>;

    return (
        <>
            {users.map((user)=>(
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-header">
                        <h3>{user.name}</h3>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Email: {user.email}</li>
                        <li className="list-group-item">Password: {user.password}</li>
                        <li className="list-group-item">CreatedAt: {user.createdAt}</li>
                    </ul>
                </div>
            ))}
        </>
    )
}

export default UsersList
import useAllUser from "../../Hooks/useAllUser";

const Admin = () => {
    const [allUser] = useAllUser();
    console.log('all user', allUser)
    return (
        <div>
            <h1> hi i m admin </h1>
        </div>
    );
};

export default Admin;
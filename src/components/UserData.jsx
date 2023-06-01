import React from "react";

const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id, name, price, category, description} = curUser;

                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{category}</td>
                            <td>{description}</td>
                            <td>{price}</td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default UserData;
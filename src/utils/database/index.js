export { default as getCurrentUser } from './getCurrentUser';
/*
    Input: Nothing.
    Output: Returns an Object with current user's data, or null if it doesn't exist.

    E.G.
    const user = getUser();
    console.log(user);
    => { "email": "sample@email.com", "gender": "female", "age": 22 }

    Note: This is an asynchronous function. Do not forget to await it.
*/

export { default as storeUser } from './storeUser';
/*
    Input: Object with data of user to-be-stored, String representing role (User || Owner).
    Output: Stores user data in firestore if
    
    E.G. 
    const user = {
        email: "sample@email.com",
        gender: "female",
        age: 22
    };
    storeUser(user, "Owner");

    Note: This is an asynchronous function. Do not forget to await it.
*/
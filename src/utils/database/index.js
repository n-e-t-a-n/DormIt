export { default as getUser } from './getUser';
/*
    Input: Nothing.
    Output: Object with data of current logged-in user if exists, null if not, console-logged error if caught.

    E.G.
    const user = getUser();
    console.log(user);
    => { email: sample@email.com, gender: female, age: 22 }

    Note: This is an asynchronous function. Do not forget to await it.
*/

export { default as storeUser } from './storeUser';
/*
    Input: Object with data of user to-be-stored, String representing role (user || owner).
    Output: Stores user data in firestore, with { email } as document-id, console-logged error if caught.
    
    E.G. 
    const user = {
        email: "sample@email.com",
        gender: "female",
        age: 22
    };
    storeUser(user, "owner");

    Note: This is an asynchronous function. Do not forget to await it.
*/
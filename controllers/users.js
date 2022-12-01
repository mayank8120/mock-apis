import { v4 as uuidv4 } from 'uuid';
let users = [];


export const getAll = (req, res) => res.send(users);


export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with name ${user.fname} added.`);
};

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`USER DELETED with id  :  ${id}`);
}

export const getUserWithId = (req, res) => {
    const { id } = req.params;
    res.send(users.find((user) => user.id === id));
}


export const updateUserWithId = (req, res) => {
    const { id } = req.params;
    const { fname, lname, age } = req.body;
    const userToUpdate = users.find((user) => user.id === id);
    if (fname) userToUpdate.fname = fname;
    if (lname) userToUpdate.lname = lname;
    if (age) userToUpdate.age = age;
    res.send(`User with id ${id} updated`);
}
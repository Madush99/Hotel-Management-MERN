import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'dave bulner',
        email: 'bulner@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'madusanka',
        email: 'madush@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
]



export default users
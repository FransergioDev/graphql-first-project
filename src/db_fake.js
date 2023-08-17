const listaUsuarios = [
  {
    _id: String(Math.random()) + "@2dsad@!@3",
    name: "João",
    email: "joao22@gmail.com",
    active: true,
  },
  {
    _id: String(Math.random()) + "@2dsad@!@3",
    name: "Maria",
    email: "maria123@gmail.com",
    active: true,
  },
  {
    _id: String(Math.random()) + "@2dsad@!@3",
    name: "Pedro",
    email: "pedrinho@hotmail.com",
    active: true,
  },
  {
    _id: String(Math.random()) + "@2dsad@!@3",
    name: "Ana",
    email: "aninha@gmail.com",
    active: true,
  },
  {
    _id: String(Math.random()) + "@2dsad@!@3",
    name: "Bruna",
    email: "bruna2567@gmail.com",
    active: false,
  },
];

const getAllUsers = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(listaUsuarios), 10);
  });
};

const getUserByEmail = async (email) => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(listaUsuarios.find((user) => user.email === email)),
      15
    );
  });
};

const createUser = async (name, email) => {
  return new Promise((resolve) => {
    const newUser = {
      _id: String(Math.random()) + "@2dsad@!@3",
      name,
      email,
      active: true,
    };
    listaUsuarios.push(newUser);
    setTimeout(() => resolve(newUser), 15);
  });
};

module.exports = { getAllUsers, getUserByEmail, createUser };

// Um banco de dados de usuários simulado para fins de teste
const users = [
   {
      id: 1,
      email: 'teste@exemplo.com',
      // Senha 'senha123' criptografada com bcrypt. Nunca armazene senhas em texto puro!
      password: '$2b$10$N48SiJKMygDjo46T/mFpgepcGpQetix8/9kNbx6VLwStIaRtlkQtW'
   },
   {
      id: 2,
      email: 'usuario2@exemplo.com',
      password: 'senha1234'
   },
];

module.exports = users;
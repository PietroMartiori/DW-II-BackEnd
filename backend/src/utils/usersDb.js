// Um banco de dados de usuários simulado para fins de teste
const users = [
   {
      id: 1,
      email: 'teste@exemplo.com',
      // Senha 'senha123' criptografada com bcrypt. Nunca armazene senhas em texto puro!
      password: '$2a$10$w85xN8vB2.X9p.jH3N5G0O/hP7n7m.e.c8f.r.k.a2B.u7g.u6'
   },
   {
      id: 2,
      email: 'usuario2@exemplo.com',
      password: '$2a$10$w85xN8vB2.X9p.jH3N5G0O/hP7n7m.e.c8f.r.k.a2B.u7g.u6'
   },
];

module.exports = users;
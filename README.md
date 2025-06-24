🎓 TrabalhoFinal2
Projeto de conclusão de módulo da disciplina de Desenvolvimento Web e Mobile.

📌 Estrutura do Projeto:
java
Copiar
Editar
TrabalhoFinal2/
├── web/ 👉 Aplicação Web (React+Vite)
├── mobile/ 👉 Aplicação Mobile (Expo + React Native)
├── README.md 👉 Este arquivo de documentação
🌐 Projeto Web (React + Vite)
✅ Funcionalidades:
Tela de Listagem de Alunos
Exibe todos os alunos cadastrados na API, com botões de Editar e Excluir.

Tela de Cadastro/Edição de Aluno
Formulário para cadastrar um novo aluno ou editar um existente.

Menu de Navegação
Links para alternar entre a lista de alunos e o cadastro.

Integração com API:
Consome a API disponível em:
http://leoproti.com.br:8004

🚀 Como rodar localmente (Web):
bash
Copiar
Editar
cd web
npm install
npm run dev
Acesse no navegador:
http://localhost:5173

🌎 Como publicar na Vercel:
Suba o projeto no GitHub.

Na Vercel, escolha este repositório.

Configure a Root Directory como:

nginx
Copiar
Editar
web
Build Command:

arduino
Copiar
Editar
npm run build
Output Directory:

nginx
Copiar
Editar
dist
Clique em Deploy.

📱 Projeto Mobile (Expo + React Native)
✅ Funcionalidades:
Tela de Listagem de Alunos

Tela de Cadastro e Edição de Aluno

Integração com a mesma API do Web

Navegação entre telas com React Navigation

🚀 Como rodar localmente (Mobile):
Requisitos: Ter o Node.js e o Expo CLI instalados.

bash
Copiar
Editar
cd mobile
npm install
npx expo start
Depois:

Leia o QR Code com o aplicativo Expo Go no celular.
Ou: Rode no emulador Android/iOS.

✅ Tecnologias utilizadas:
Web: React, Vite, Axios, React Router DOM

Mobile: React Native, Expo, React Navigation, Axios

API: Externa, já disponível e funcionando

👨‍💻 Autor:
Mateus Ulhoa

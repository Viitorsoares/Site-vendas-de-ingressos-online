import express from 'express';
import process from 'process';
import path from 'path';
import session from 'express-session';
import autenticar from './seguranca/autenticar.js';

const host = '0.0.0.0';
const porta = 3000;

const site = express();

site.use(express.urlencoded({extended: true}));

site.use(session({
    secret: 'ChAvEsEcReTa',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 1000 * 15
    }
}))

site.post('/login', (requisicao, resposta)=> {
    const usuario = requisicao.body.usuario;
    const senha = requisicao.body.senha;
    if (usuario && senha && usuario === 'Vitor' && senha === '123') {
        requisicao.session.usuarioLogado = true;
        resposta.redirect('/index.html');
    } else {
        resposta.redirect('/login.html');
    }
})

site.use(express.static(path.join(process.cwd(), 'publico')));

site.use(autenticar, express.static(path.join(process.cwd(), 'privado')));

site.listen(porta, host, ()=> {
    console.log(`Servidor escutando em http://${host}:${porta}`);
})


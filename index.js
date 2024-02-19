import express from 'express'
import process from 'process'
import path from 'path'

const site = express()

const host = '0.0.0.0'
const porta = 3002

site.use(express.static(path.join(process.cwd(), 'publico')))

site.use(express.static(path.join(process.cwd(), 'privado')))

site.listen(porta, host, ()=> {
    console.log(`Servidor escutando em http://${host}:${porta}`)
})
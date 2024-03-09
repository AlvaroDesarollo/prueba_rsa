const nodeRsa = require('node-rsa');
const fs= require('fs')
require('dotenv').config()

const keyPrivate = process.env.KEY_PRIVATE
const keyPublic = process.env.KEY_PUBLIC


const key = new nodeRsa(fs.readFileSync(keyPrivate))

const texto='Hola Mundo'
const txtEncrypt = key.encryptPrivate(texto, 'base64')
console.log('Llega del Servidor: ', txtEncrypt)


const keyPublica = new nodeRsa(fs.readFileSync(keyPublic))
const textoEncriptado = txtEncrypt

const decrypted = keyPublica.decryptPublic(textoEncriptado, 'utf8')
console.log('Cliente Desencripta: ', decrypted)
console.log('**********************************************************************')

const t = 'cobrar 5000 mil a tarjeta 1'
const tencriptadoPublic = keyPublica.encrypt(t, 'base64');
console.log('llega del cliente:', tencriptadoPublic)

const result = key.decrypt(tencriptadoPublic, 'utf8')

console.log('Servidor Desencripta: ',result)

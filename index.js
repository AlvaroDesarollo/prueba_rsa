const nodeRsa = require('node-rsa');
const fs = require('fs');
require('dotenv').config();

const keyPrivate = process.env.KEY_PRIVATE;
const keyPublic = process.env.KEY_PUBLIC;
console.log(keyPrivate, keyPublic);
const fs2 = fs;

const key = new nodeRsa(fs2.readFileSync(keyPrivate));

const texto = 'Hola Mundo';
const txtEncrypt = key.encryptPrivate(texto, 'base64');
console.log('Llega del Servidor: ', txtEncrypt);

const keyPublica = new nodeRsa(fs2.readFileSync(keyPublic));
const textoEncriptado =
  'CD5iVEC404/NRu+1yzhMXrKPrkMrFX+mdA6UkGLssdP9bz9VmN3ulIQe7+HNC87CW2Tlhc6C3P/Q2Ipb03M0jCJzb3QFU7038IX54TZDojVBUm3Hfzc4U0Kvw2AE14erMyANkMe5fH4/VCSLu3BSbhOFVEcmVA2GAeZGlV6vBMRLUcC+ieXjfWjbO/wSDJhjqhEu30cv1G1M1bbmpBbgHw6pbtOTPE9juI3QEAmfQn3wTqx8DtsTI1ybs7+pCDolJWiS1ZWqWEY/fiA8aZUfERERHE356/60iYe8Wk0Jt/79IF/1dAkppxkf5h2HSD0pAoptwb+T1+wboPXeE1R+nQ==';

const decrypted = keyPublica.decryptPublic(textoEncriptado, 'utf8');
console.log('Cliente Desencripta: ', decrypted);
console.log(
  '**********************************************************************'
);

const t = { a: 'cobrar 5000 mil a tarjeta 1' };
const tencriptadoPublic = keyPublica.encrypt(t, 'base64');
console.log('llega del cliente:', tencriptadoPublic);

const result = key.decrypt(tencriptadoPublic, 'utf8');

console.log('Servidor Desencripta: ', result);



console.log('----------------------------------------------------------------------------------------')
const forge = require('node-forge')
const privateKey = forge.pki.privateKeyFromPem(fs2.readFileSync(keyPrivate));
const decodeText = forge.util.decode64('DPm6iFEuS8Vf0IZ62vO9D3iL8zWyYvhjbE+5kV/Wl0K2UrO9VTxLVWcYhjqgIdLfRRHMlBs2/NkAvHYpnfQnvYISdmpHv03CviDj4zs4j6YPE4H1FiDBnw7R/RjFGOBEa2ROjQrtSC1hVGxdoK8imY8vWcC/OL+LxxbOCdRFvb/+PqI2KFTX3pLwRLEqqretyBQsZkJABVBI5NQfv0wfdmthlxRgmAMdGppHuC11OMPpZmAPLOMnOhT25c9CDHEs04AWo6bVZHD+PW0LeBSQ51UTLeZt8CPFXbRmBOh+Kijn8MYw1p5CC/up6srK+jGziFHZv6LC642p+w8MEKk6+w==');
const decrypted2 = privateKey.decrypt(decodeText);
console.log('aqui', JSON.parse(decrypted2))

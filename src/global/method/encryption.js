import forge from 'node-forge'
import * as constants from '../constants'

export default (password)=>{
  const publicKey = constants.PUBLIC_KEY
  const RSA = forge.pki.publicKeyFromPem(publicKey)
  const encryptText = RSA.encrypt(password, 'RSA-OAEP')
  return forge.util.encode64(encryptText)
}
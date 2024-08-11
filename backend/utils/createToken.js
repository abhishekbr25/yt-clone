import jwt from 'jsonwebtoken'

export async function createToken(id){
    return await jwt.sign({id}, 'secretkey123', {expiresIn: '3d'})
}
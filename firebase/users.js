import { db, auth } from './index'

export const usersCollection = db.collection('users')

export const setUser = (userId, nombre) => {
  
  console.warn("setUserNombre",nombre)
  console.warn("setUserID",userId)
  
  usersCollection.doc(userId).set({
    nombre
  })
}

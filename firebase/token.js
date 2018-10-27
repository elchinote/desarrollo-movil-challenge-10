import { db, auth } from './index'

export const tokenCollection = db.collection('tokens')

export const setToken = (userId, token) => {
  console.warn("Token",token)
  console.warn("setToken",userId)
  tokenCollection.doc(userId).set({
    token
  })
}

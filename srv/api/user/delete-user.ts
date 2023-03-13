import { store } from '../../db'
import { handle } from '../wrap'

export const deleteUserAccount = handle(async ({ userId }) => {
  await store.users.deleteUser(userId!)
  return { success: true }
})

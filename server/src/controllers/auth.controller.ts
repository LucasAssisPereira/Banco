import { createAccount } from "../services/auth.service"


export const registerController = () => {
    createAccount()
}

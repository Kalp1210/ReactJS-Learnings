import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

// iska proper syntax bhi hai appwrite documentation main but hum apna modify wala use karenge ki thoda optimize ho apne tareeke se

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(appwriteUrl).setProject(appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method
        // like sign up ke baad wapas login karana hai ya phir direct app ke andar daal na hai
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login(email, password) {
    try {
      await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;

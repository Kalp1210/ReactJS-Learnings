import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

// iska proper syntax bhi hai appwrite documentation main but hum apna modify wala use karenge ki thoda optimize ho apne tareeke se

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
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

        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login(email, password) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      // throw error;
      console.log("Appwrite service:: getCurrentUser :: error", error);
    }

    return null;
  }

  async logout() {
    try {
      // await this.account.deleteSession('current');
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service:: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;

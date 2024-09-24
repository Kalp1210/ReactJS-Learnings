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
}

const authService = new AuthService();

export default authService;

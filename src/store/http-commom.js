import axios from "axios";

export const HTTP = axios.create({
         baseURL: ` https://api.github.com/search`,
         headers: {
           Accept: "application/vnd.github.mercy-preview+json"
         }
       });

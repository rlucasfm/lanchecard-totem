import {IUser} from './IUser';

let user: IUser;

export default {
  setUserData(userdata: IUser) {
    user = userdata;
  },
  getUserData(): IUser {
    return user;
  },
};

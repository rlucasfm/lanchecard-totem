import {ISessionData} from './ISessionData';

let session: ISessionData = {
  idEstabelecimento: 3,
};

export default {
  setSessionData(sessionData: any) {
    session = sessionData;
  },

  getSessionData(): any {
    return session;
  },

  pushSessionData(prop: Object) {
    session = {...session, ...prop};
  },
};

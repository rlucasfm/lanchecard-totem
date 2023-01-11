import {ISessionData} from './ISessionData';

let session: ISessionData = {
  idEstabelecimento: 3,
  token: '14U3zRxs2D49tHj9EAQLVPDVapmhnZd8CsEHesme',
};

export default {
  setSessionData(sessionData: ISessionData) {
    session = sessionData;
  },

  getSessionData(): ISessionData {
    return session;
  },

  pushSessionData(prop: Object) {
    session = {...session, ...prop};
  },
};

let session = {};

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

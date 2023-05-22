const state={//要设置的全局访问的state对
    moduleAName:'moduleA Hello'
  };

const moduleA = {
    state: () => ({
        ...state
     }),
    mutations: {},
    actions: {},
    getters: { }
  }

export default moduleA




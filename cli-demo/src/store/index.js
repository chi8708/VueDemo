//参考 https://segmentfault.com/a/1190000015782272
import Vue from 'vue';
import Vuex from 'vuex';
//Vue.use(Vuex);
const state={//要设置的全局访问的state对象
    showFooter: true,
    changableNum:0
    //要设置的初始属性值
  };

  const getters = {   //实时监听state值的变化(最新状态)
    isShow(state) {  //方法名随意,主要是来承载变化的showFooter的值
       return state.showFooter
    },
    getChangedNum(){  //方法名随意,主要是用来承载变化的changableNum的值
       return state.changableNum
    }
}

const mutations = {
    show(state) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
        state.showFooter = true;
    },
    hide(state) {  //同上
        state.showFooter = false;
    },
    newNum(state,sum){ //同上，这里面的参数除了state之外还传了需要增加的值sum
       state.changableNum+=sum;
    }
};

//vuex官方API还提供了一个actions，这个actions也是个对象变量，
// 最大的作用就是里面的Action方法 可以包含任意异步操作，这里面的方法是用来异步触发mutations里面的方法，
// actions里面自定义的函数接收一个context参数和要变化的形参，
// context与store实例具有相同的方法和属性，所以它可以执行context.commit(' '),然后也不要忘了把它也扔进
const actions = {
    hideFooter(context) {  //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
        context.commit('hide');
    },
    showFooter(context) {  //同上注释
        context.commit('show');
    },
    getNewNum(context,num){   //同上注释，num为要变化的形参
        context.commit('newNum',num)
     }
};


const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
 
export default store;
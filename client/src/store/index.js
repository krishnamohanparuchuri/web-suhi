import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    streams: [],
    token: '',
    userName: [],
  },
  mutations: {
    UPDATE_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token)
    },
    DISPLAY_STREAMS(state, streams) {
      state.streams = streams;
    },
    ADD_STREAM(state, stream) {
      state.streams.push(stream)
    },
    REGISTER_USER(state, userName) {
      state.userName = userName;
    }
  },
  actions: {
    async registerUser(ctx, userDetails) {
      console.log(userDetails)
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        body: JSON.stringify(userDetails),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      console.log(data)
      ctx.commit('REGISTER_USER', data.userName);
    },
    async login(ctx, userDetails) {
      console.log(userDetails)
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        body: JSON.stringify(userDetails),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      console.log(data)
      ctx.commit('UPDATE_TOKEN', data.token);
    },
    async loadStreams(ctx) {
      const response = await fetch('http://localhost:5000/api/streams', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      console.log(data)
      ctx.commit('DISPLAY_STREAMS', data.streams);
    },
    async addStream(ctx, newStream) {
      console.log(newStream)
      const response = await fetch('http://localhost:5000/api/streams', {
        method: 'POST',
        body: JSON.stringify(newStream),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      console.log(data)
      ctx.commit('ADD_STREAM', data.newStream);
    },
  },
  modules: {
  }
})

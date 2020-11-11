import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    streams: [],
    token: '',
    userName: [],
    message: '',
    tags: []
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
    },
    DELETE_STREAM(state, id) {
      const index = state.streams.find((stream) => stream.id === id)
      state.streams.splice(index, 1)
      console.log(this.state.streams)
    },
    DELETE_ALL_STREAMS(state) {
      state.streams = []
    },
    ADD_TAG(state, newTag) {
      state.tags.push(newTag);
    },
    DISPLAY_TAGS(state, tags) {
      state.tags = tags
    },
    DELETE_TAG(state, tagIndex) {
      state.tags.splice(tagIndex, 1)
      console.log(this.state.tags)
    },
    DELETE_ALL_TAGS(state) {
      state.tags = []
    },
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
          'authorization': 'Bearer ' + ctx.state.token,
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
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + ctx.state.token,
        }
      });

      const data = await response.json();
      console.log(data)
      ctx.commit('ADD_STREAM', data.newStream);
    },
    async deleteStream(ctx, streamId) {
      const response = await fetch('http://localhost:5000/api/stream/', {
        method: 'DELETE',
        body: JSON.stringify(streamId),
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + ctx.state.token,
        }
      });

      const data = await response.json();
      console.log(data)
      ctx.commit('DELETE_STREAM', data.id);
    },
    async deleteAllStreams(ctx) {
      const response = await fetch('http://localhost:5000/api/streams/', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + ctx.state.token,
        }
      });

      const data = await response.json();
      console.log(data)
      ctx.commit('DELETE_ALL_STREAMS', data.message);
    },
    async addTag(ctx, tagDetails) {
      const response = await fetch('http://localhost:5000/api/addtag', {
        method: 'POST',
        body: JSON.stringify(tagDetails),
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + ctx.state.token,
        }
      })
      const data = await response.json();
      console.log(data)
      ctx.commit('ADD_TAG', data.newTag)
    },
    async loadTags(ctx) {
      const response = await fetch('http://localhost:5000/api/tags', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + ctx.state.token,
        }
      });
      const data = await response.json();
      console.log(data)
      ctx.commit('DISPLAY_TAGS', data.tags);
    },
    async deleteTag(ctx, tagInfo) {
      const response = await fetch('http://localhost:5000/api/tag', {
        method: 'DELETE',
        body: JSON.stringify(tagInfo),
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + ctx.state.token,
        }
      });
      const data = await response.json();
      console.log(data)
      ctx.commit('DELETE_TAG', data.index);
    },
    async deleteAllTags(ctx) {
      const response = await fetch('http://localhost:5000/api/tags', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + ctx.state.token,
        }
      });
      const data = await response.json();
      console.log(data)
      ctx.commit('DELETE_ALL_TAGS', data.message);
    }

  },
  modules: {
  }
})

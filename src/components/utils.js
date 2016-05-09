import {hashHistory} from 'react-router'
import request from 'superagent'
import {createStore} from 'redux'
import reducer from '../reducer'

const store = createStore(reducer)

export {store}

export const checkAuthDeep = handler => {
  request
    .get('/checkAuth')
    .end((err, res) => {
      if(err) (console.log(err))
      else {
        res.body > 0 ?
          hashHistory.push(handler.pass) :
          hashHistory.push(handler.fail)
      }
    })
}

export const logout = callback => {
  request
    .get('/logout')
    .end((err,res) => {
      if(err) console.log(err)
      else {
        hashHistory.push('/')
        callback()
      }
    })
}

export const checkLogIn = (currUser, target) => {
  switch(target) {
    case 'signup':
      if(currUser > 0)
        return 'hidden'
      break
    case 'logInOut':
      if(currUser > 0) return 'Log-out'
      else return 'Log-in'
      break
  }
}

export const loginOrSignUp = (action, formData, cbSuccess, cbError) => {
  request
    .post(action)
    .send(formData)
    .end((err,res) => {
      if(err) console.log(err)
      else {
        if(Number.isInteger(res.body)){
          request
            .get(`/user/${res.body}`)
            .end((err,res) => {
              if(err) console.log(err)
              else {
                hashHistory.push('/')
                cbSuccess(res.body[0])
              }
            })
        }
        else cbError()
      }
    })
}

export const loadUserToStore = store => {
  request
    .get('/checkAuth')
    .end((err,userId) => {
      if(err) console.log(err)
      else {
        if(userId.body > 0) {
          request
            .get(`/user/${userId.body}`)
            .end((err,userData) => {
              if(err) console.log(err)
              else {
                store.dispatch({
                  type: 'SET_CURRENT_USER',
                  user: userData.body[0]
                })
              }
            })
        }
      }
    })
}

export const loadListingsToStore = store => {
  request
  .get('/list')
  .end(function(err, res){
    if(err) console.log(err)
    store.dispatch({
      type: 'LOAD_LISTINGS',
      listings: res.body
    })
  })
}
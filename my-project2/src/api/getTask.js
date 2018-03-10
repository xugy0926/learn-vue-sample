import * as axios from 'axios'
import * as R from 'ramda'

export const getTask = function (isCompeleted) {
  return axios
  .get('https://api.myjson.com/bins/oufit')
  .then(response => response.data)
  .then(data => {
    var fun = (n) => n.completed === isCompeleted;
    return R.filter(fun, data)
  })
}
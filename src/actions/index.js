import axios from 'axios'

export const LOAD_ACQUISITION = 'LOAD_ACQUISITION'
export const RECEIVE_ACQUISITION = 'RECEIVE_ACQUISITION'
export const FETCH_MONETIZATION = 'FETCH_MONETIZATION'
export const RECEIVE_MONETIZATION = 'RECEIVE_MONETIZATION'

const loadAcquisition = () => ({
  type: LOAD_ACQUISITION,
  payload: '',
})

const receiveAcquisition = (acquisitions) => ({
  type: RECEIVE_ACQUISITION,
  payload: acquisitions,
})

export const fetchAcquisition = () => dispatch => {
  dispatch(loadAcquisition())

  return axios.get('http://mock-api.voodoo.io/acquisition?api_key=31I4HHdML8AH30OQCqbuRswzFcvhigvs3f15UQqc6VuOnTNzKYJosB43I5vE2o2SmwNYhh7oCS5X1XUJjhDzlnX9RugHJ&start=2018-10-01&end=2018-10-02&format=json&columns=day,impressions,clicks,ctr,cost,country,ad_type,platform,application,package_name')
    .then(response => console.log(response) || dispatch(receiveAcquisition(response.data)))
    .catch(error => console.error(error))
} 
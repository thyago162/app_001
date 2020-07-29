import axios from 'axios'

const URL = 'https://cat-fact.herokuapp.com/facts'

export function getCatfact () {
    return dispatch => {
         axios.get(URL)
        .then(res => {
            if (res.status === 200) {
                let arrayData = res.data.all.sort(function (a, b) {
                    return (a.upvotes > b.upvotes) ? 1 : ((b.upvotes > a.upvotes) ? -1: 0)
               }).reverse()

                dispatch(successfull(arrayData))
            }
        })
    }
}

export function successfull(param) {
    return {
        type: 'SUCCESSFULL',
        payload: param
    }
}

export function isLoading(param) {
    return {
        type: 'IS_LOADING',
        payload: param
    }
}

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'FIND_ANECDOTES':
      return action.data
    default: {
      return state
    }
  }
}

export const setFilter = (filter) => {
  return {
    type: 'FIND_ANECDOTES',
    data: filter,
  }
}

export default filterReducer

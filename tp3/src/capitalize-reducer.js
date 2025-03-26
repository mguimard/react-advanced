
function capitalizeReducer(state, text) {
    if (text.length > 0) {
      return text.substring(0, 1).toUpperCase() + text.substring(1, text.length)
    }
  
    return ''
  }

  export default capitalizeReducer
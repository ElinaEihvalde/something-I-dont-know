export default (value) => {
    const today = new Date(value)
    return today.toLocaleString(['en-GB'], {weekday:'long'})
  }
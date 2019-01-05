export default (value) => {
    const event = new Date(value)
    return event.toLocaleString(['en-GB'], {day:'2-digit', month:'2-digit', year:"numeric"})
  }
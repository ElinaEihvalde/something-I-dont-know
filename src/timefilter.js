export default (value) => {
    const time = new Date(value)
    return time.toLocaleString(['en-GB'], { hour: 'numeric', minute: 'numeric'})
    
  }
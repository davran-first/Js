
  function getColor() {
    const colors = [
        '#49A16C', '#064236',
        '#ED6742', '#F498AD',
        '#1A5AD7', '#AFC9DA',
        '#FFD829', '#282A2E',
        '#5E6064', '#E6E6E6'
    ]
    return colors[Math.floor(Math.random() * colors.length)]
}

export {getColor as listColors}
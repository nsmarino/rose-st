export const locate = ({id, type}) => {
  if (type === 'post') {
    return {
      locations: [
        {title: `Portfolio`, href: `/portfolio`},
      ],
    }
  } else if (type === 'settings') {
    return {
      locations: [
        {title: `Portfolio`, href: `/portfolio`},
        {title: `Info`, href: `/`},
      ],
    }
  }
  return null
}
import styled, { keyframes, css } from "styled-components";
import bridges from '../img/Bridges_landing_page.jpg'
import logo from '../img/logoPedal.png'
const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 576,
  }
  
  // Iterate through the sizes and create a media template
  const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `
  
    return acc
  }, {})

  export const BackgroundHeader = styled.div`
background-image: url(${bridges});
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
background-repeat: no-repeat;
background-size: cover;
background-position: center center;

`

export const PageHeaderLogo = styled.img`
background-image: url(${logo});
height: 50vh;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
margin-left: auto;
margin-right: auto;
max-width: 65.875em;
/* Now we have our methods on media and can use them instead of raw queries */

  ${media.tablet`margin: 0 0 .35em;
  max-width: 10em;
  color: #fff;
  font-family: KingsCaslon-Bold
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  color: #FFF8F8;padding-left:10px;
  padding-top:10px;`}
  ${media.phone` margin: 0 0 .35em;
  max-width: 10em;
  color: #fff;
  font-family: KingsCaslon-Bold
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  color: #FFF8F8;padding-left:10px;
  padding-top:10px;`}
`
// import React from 'react'
// import './SpotLight.css'
// import StyledButton from '../SpotLight/SpotLightButton'
// import StyledAbout from './SpotLightAbout'
// import { useLocation } from 'react-router-dom'
// import { useContext } from 'react'
// import { movieContext } from '../Router/Router'

// function SPotLight() {
//   const { movie } = useContext(movieContext);
//   const location= useLocation()
//   return location.pathname !== "/" ?(
//     <div className='SpotLight'>
//       <div className='spotImg'>
//         <img src={movie?.Poster} alt='img'/>
//       </div>
//        <div className='SpotContent'>
//             <div className='SpotLightButton'>
//                 <StyledButton>Play</StyledButton>
//                 <StyledButton>My List</StyledButton>
//             </div>
//            <StyledAbout className='spotLightAbout'>
//            {/* The survivors of a plane crash are forced to work together in order to survive on a seemingly deserted tropical island. */}

//            </StyledAbout>
    
//        </div>
//     </div>
//   ):null
// }

// export default SPotLight
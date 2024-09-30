// import React from 'react';
// import { Card, CardMedia, Typography } from '@mui/material';
// import { Flipper, Flipped } from 'react-flip-toolkit';
// import './Card.css'; // For smooth flip CSS

// const CardComponent = ({ index, value, isFlipped, onClick }) => {
//   const backText = value; 
//   const frontImage =`https://images.unsplash.com/photo-1602044330256-33dcb6f75f2c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`; // Replace with actual character images
  


//   return (
//     <Flipper flipKey={isFlipped}>
//       <Flipped flipId={`card-${index}`} stagger>
//         <Card
//           onClick={onClick}
//           sx={{
//             width: { xs: '90px', sm: '150px', md: '200px' }, 
//             height: { xs: '90px', sm: '150px', md: '200px' }, 
//             perspective: '1000px', 
//           }}
//         >
//           <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
//             {/* Card Front */}
//             <div className="flip-card-front">
//               <CardMedia
//                 component="img"
//                 alt="Harry Potter Character"
//                 image={frontImage}
//                 sx={{
//                   width: '100%',
//                   height: '100%',
//                 }}
//               />
//             </div>
//             {/* Card Back */}
//             <div className="flip-card-back">
//               <div
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   height: '100%',
//                   backgroundColor: '#1a1a1a', // Same dark background
//                   color: 'gold', // Text color
//                   fontSize: '1.2rem', // Text size
//                   textAlign: 'center', // Center the text
//                 }}
//               >
//                 <Typography variant="h6">{backText}</Typography>
//               </div>
//             </div>
//           </div>
//         </Card>
//       </Flipped>
//     </Flipper>
//   );
// };

// export default CardComponent;


import React from 'react';
import { Card, CardMedia, Typography } from '@mui/material';
import { Flipper, Flipped } from 'react-flip-toolkit';
import './Card.css'; // For smooth flip CSS

const CardComponent = ({ index, value, isFlipped, onClick }) => {
  const backText = value; 
  const frontImage = `https://images.unsplash.com/photo-1602044330256-33dcb6f75f2c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`; // Replace with actual character images

  return (
    <Flipper flipKey={isFlipped}>
      <Flipped flipId={`card-${index}`} stagger>
        <Card
          onClick={onClick}
          className="card-floating" // Adding the floating effect class
          sx={{
            width: { xs: '90px', sm: '150px', md: '200px' }, 
            height: { xs: '90px', sm: '150px', md: '200px' }, 
            perspective: '1000px', 
            transition: 'transform 0.5s ease-in-out', // Smooth transform
          }}
        >
          <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
            {/* Card Front */}
            <div className="flip-card-front">
              <CardMedia
                component="img"
                alt="Harry Potter Character"
                image={frontImage}
                sx={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            {/* Card Back */}
            <div className="flip-card-back">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  backgroundColor: '#1a1a1a', // Same dark background
                  color: 'gold', // Text color
                  fontSize: '1.2rem', // Text size
                  textAlign: 'center', // Center the text
                }}
              >
                <Typography variant="h6">{backText}</Typography>
              </div>
            </div>
          </div>
        </Card>
      </Flipped>
    </Flipper>
  );
};

export default CardComponent;

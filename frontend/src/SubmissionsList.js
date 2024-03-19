// // Import React
// import React from 'react';

// // SubmissionsList component to display a list of submissions
// const SubmissionsList = ({ submissions }) => {
//   return (
//     <div>
//       <h3>Submissions List</h3>
//       {/* Iterate over each submission and display its details */}
//       {submissions.map(submission => (
//         <div key={submission.id}>
//           <p>First Name: {submission.firstName}</p>
//           <p>Last Name: {submission.lastName}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SubmissionsList;


// SubmissionsList.js
// import React, { useEffect, useState } from 'react';
// import { generateClient } from '@aws-amplify/api';
// import { listSubmissions } from './graphql/queries';
// import { withAuthenticator } from '@aws-amplify/ui-react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

// function SubmissionsList() {
//   const [submissions, setSubmissions] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const client = generateClient();

//   useEffect(() => {
//     const fetchSubmissions = async () => {
//       try {
//         const submissionData = await client.graphql({ query: listSubmissions });
//         setSubmissions(submissionData.data.listSubmissions.items);
//       } catch (err) {
//         console.error("Error fetching submissions:", err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchSubmissions();
//   }, []);

//   if (isLoading) {
//     return <Typography>Loading submissions...</Typography>;
//   }

//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="submissions table">
//         <TableHead>
//           <TableRow>
//             <TableCell>
//               <Typography variant="h6" component="div">
//               <Box sx={{ fontWeight: 'bold', m: 1 }}>
//                 First Name
//                 </Box>
//               </Typography>
//             </TableCell>
//             <TableCell>
//               <Typography variant="h6" component="div">
//               <Box sx={{ fontWeight: 'bold', m: 1 }}>
//                 Last Name
//                 </Box>
//               </Typography>
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {submissions.map((submission) => (
//             <TableRow key={submission.id}>
//               <TableCell component="th" scope="row">
//                 {submission.firstName}
//               </TableCell>
//               <TableCell>{submission.lastName}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// export default withAuthenticator(SubmissionsList);

// Necessary imports for React, Amplify, Material UI, and custom components or functions.
import React, { useEffect, useState } from 'react';
import { generateClient } from '@aws-amplify/api'; // Amplify API client for making GraphQL queries.
import { listSubmissions } from './graphql/queries'; // GraphQL query to fetch submissions.
import { withAuthenticator } from '@aws-amplify/ui-react'; // Amplify higher-order component for authentication.
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material'; // Material-UI components for UI design.

function SubmissionsList() {
  const [submissions, setSubmissions] = useState([]); // State to store fetched submissions.
  const [isLoading, setIsLoading] = useState(true); // State to manage loading indicator.
  const client = generateClient(); // Initialize Amplify API client.

  useEffect(() => {
    // Fetch submissions when component mounts.
    const fetchSubmissions = async () => {
      try {
        // Execute GraphQL query to fetch submissions.
        const submissionData = await client.graphql({ query: listSubmissions });
        // Store fetched submissions in state.
        setSubmissions(submissionData.data.listSubmissions.items);
      } catch (err) {
        // Handle errors in fetching submissions.
        console.error("Error fetching submissions:", err);
      } finally {
        // Disable loading indicator once fetching is complete.
        setIsLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  if (isLoading) {
    // Display loading indicator while fetching data.
    return <Typography>Loading submissions...</Typography>;
  }

  // Render table with submissions data.
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="submissions table">
        <TableHead>
          <TableRow>
            {/* Cell for "First Name" column title */}
            <TableCell>
              <Typography variant="h6" component="div">
                <Box sx={{ fontWeight: 'bold', m: 1 }}>
                  First Name
                </Box>
              </Typography>
            </TableCell>
            {/* Cell for "Last Name" column title */}
            <TableCell>
              <Typography variant="h6" component="div">
                <Box sx={{ fontWeight: 'bold', m: 1 }}>
                  Last Name
                </Box>
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {submissions.map((submission) => (
            <TableRow key={submission.id}>
              {/* Display "First Name" of the submission */}
              <TableCell component="th" scope="row">
                {submission.firstName}
              </TableCell>
              {/* Display "Last Name" of the submission */}
              <TableCell>{submission.lastName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}

export default withAuthenticator(SubmissionsList); // Wrap component with authenticator for protected access.

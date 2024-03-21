// // HomePage.js
// import React, { useState } from 'react';
// import { generateClient } from '@aws-amplify/api';
// import { createSubmission } from './graphql/mutations';

// function HomePage() {
//   const [formState, setFormState] = useState({ firstName: '', lastName: '' });
//     // Initialize the GraphQL client
//   const client = generateClient();

//   function setInput(key, value) {
//     setFormState({ ...formState, [key]: value });
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     if (!formState.firstName || !formState.lastName) {
//       alert('Please fill in both first name and last name');
//       return;
//     }
//     try {
//       await client.graphql({
//         query: createSubmission,
//         variables: { input: formState }
//         });
//       alert('Submission successful!');
//       setFormState({ firstName: '', lastName: '' }); // Reset form after submission
//     } catch (err) {
//       console.error('Error adding submission:', err);
//       alert('Submission failed! Please try again.');
//     }
//   }

//   return (
//     <div>
//       <h2>My Submission Form</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           onChange={event => setInput('firstName', event.target.value)}
//           value={formState.firstName}
//           placeholder="First name"
//           required
//         />
//         <input
//           onChange={event => setInput('lastName', event.target.value)}
//           value={formState.lastName}
//           placeholder="Last name"
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default HomePage;


// HomePage.js
// import React, { useState } from 'react';
// import { generateClient } from '@aws-amplify/api';
// import { createSubmission } from './graphql/mutations';

// function HomePage() {
//   const [formState, setFormState] = useState({ firstName: '', lastName: '' });
//   const client = generateClient();

//   function setInput(key, value) {
//     setFormState({ ...formState, [key]: value });
//   }

//   async function handleSubmit(event) {
//     event.preventDefault();
//     try {
//       const { firstName, lastName } = formState;
//       if (!firstName || !lastName) {
//         alert('Both first name and last name are required');
//         return;
//       }
//       await client.graphql({
//         query: createSubmission,
//         variables: { input: formState }
//         });
//       alert('Submission successful!');
//       setFormState({ firstName: '', lastName: '' });
//     } catch (err) {
//       alert('Error during submission');
//       console.error('Error adding submission:', err);
//     }
//   }

//   return (
//     <div>
//       <h2>My Submission Form</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="firstName"
//           type="text"
//           placeholder="First name"
//           value={formState.firstName}
//           onChange={e => setInput('firstName', e.target.value)}
//         />
//         <input
//           name="lastName"
//           type="text"
//           placeholder="Last name"
//           value={formState.lastName}
//           onChange={e => setInput('lastName', e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default HomePage;


// HomePage.js or any other component where you want to use MUI
// import React, { useState } from 'react';
// import { Container, TextField, Button, Typography, Box } from '@mui/material';
// import { generateClient } from 'aws-amplify/api'; // Ensure you have this import correctly set up
// import { createSubmission } from './graphql/mutations'; // Adjust the path as necessary

// function HomePage() {
//   const [formState, setFormState] = useState({ firstName: '', lastName: '' });
//   const client = generateClient();

//   function setInput(key, value) {
//     setFormState({ ...formState, [key]: value });
//   }

//   async function handleSubmit(event) {
//     event.preventDefault();
//     try {
//       const { firstName, lastName } = formState;
//       if (!firstName || !lastName) {
//         alert('Both first name and last name are required');
//         return;
//       }
//       await client.graphql({
//         query: createSubmission,
//         variables: { input: formState }
//       });
//       alert('Submission successful!');
//       setFormState({ firstName: '', lastName: '' }); // Reset form state
//     } catch (err) {
//       alert('Error during submission');
//       console.error('Error adding submission:', err);
//     }
//   }

//   return (
//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           My Submission Form
//         </Typography>
//         <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="firstName"
//             label="First Name"
//             name="firstName"
//             autoFocus
//             value={formState.firstName}
//             onChange={(e) => setInput('firstName', e.target.value)}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="lastName"
//             label="Last Name"
//             name="lastName"
//             value={formState.lastName}
//             onChange={(e) => setInput('lastName', e.target.value)}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Submit
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// export default HomePage;

// src/HomePage.js
// import React, { useState } from 'react';
// import { generateClient } from 'aws-amplify/api'; // Ensure this is correctly set up
// import { createSubmission } from './graphql/mutations'; // Adjust the path as necessary
// import { View, TextField, Button, Heading } from '@aws-amplify/ui-react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { blueGrey } from '@mui/material/colors';
// import { dark } from '@mui/material/styles/createPalette';




// function HomePage() {
//     const [formState, setFormState] = useState({ firstName: '', lastName: '' });
//     const client = generateClient();



//     function setInput(key, value) {
//         setFormState({ ...formState, [key]: value });
//     }

//     async function handleSubmit(event) {
//         event.preventDefault();
//         try {
//             const { firstName, lastName } = formState;
//             if (!firstName || !lastName) {
//                 alert('Both first name and last name are required');
//                 return;
//             }
//             await client.graphql({
//                 query: createSubmission,
//                 variables: { input: formState },
//             });
//             alert('Submission successful!');
//             setFormState({ firstName: '', lastName: '' }); // Reset form state
//         } catch (err) {
//             alert('Error during submission');
//             console.error('Error adding submission:', err);
//         }
//     }

//     return (
//         <View as="form" onSubmit={handleSubmit} padding="20px" backgroundColor="var(--amplify-colors-background-primary)" maxWidth="500px" margin="0 auto">
//             <Heading level={3}>My Submission Form</Heading>
//             <TextField
//                 // label="First Name"
//                 placeholder="First name"
//                 name="firstName"
//                 value={formState.firstName}
//                 onChange={(e) => setInput('firstName', e.target.value)}
//                 isRequired={true}
//             />
//             <TextField
//                 // label="Last Name"
//                 name="lastName"
//                 placeholder="Last name"
//                 value={formState.lastName}
//                 onChange={(e) => setInput('lastName', e.target.value)}
//                 isRequired={true}
//                 marginTop="15px"
//             />
//             <Button variation="primary" type="submit" marginTop="15px">
//                 Submit
//             </Button>
//         </View>
//     );
// }

// export default HomePage;


// Import necessary React and Amplify libraries and components.
import React, { useState } from 'react';
import { generateClient } from 'aws-amplify/api'; 
import { createSubmission } from './graphql/mutations';
import { View, TextField, Button, Heading } from '@aws-amplify/ui-react';

function HomePage() {
    // State to hold form data for first name and last name.
    const [formState, setFormState] = useState({ firstName: '', lastName: '' });
    
    // Generate an Amplify API client to interact with backend services.
    const client = generateClient();

    // Updates the formState when input fields change.
    function setInput(key, value) {
        setFormState({ ...formState, [key]: value });
    }

    // Handles form submission, checks for input validation, and uses GraphQL mutation to create a submission.
    async function handleSubmit(event) {
        event.preventDefault(); // Prevents the default form submit action.
        try {
            const { firstName, lastName } = formState;
            // Validate that both fields are filled.
            if (!firstName || !lastName) {
                alert('Both first name and last name are required');
                return;
            }
            // Executes the GraphQL mutation with the form data.
            await client.graphql({
                query: createSubmission,
                variables: { input: formState },
            });

            // Check for server-side validation errors (e.g., name restrictions)
            if (response.errors) {
                const message = response.errors[0].message;
                alert(`Submission error: ${message}`);
                return;
            }
            
            alert('Submission successful!');
            // Resets form state after successful submission.
            setFormState({ firstName: '', lastName: '' });
        } catch (err) {
            alert('Error during submission');
            console.error('Error adding submission:', err);
        }
    }

    // Renders the form using Amplify UI components.
    return (
        <View as="form" onSubmit={handleSubmit} padding="20px" backgroundColor="var(--amplify-colors-background-primary)" maxWidth="500px" margin="0 auto">
            <Heading level={3}>My Submission Form</Heading>
            <TextField
                placeholder="First name"
                name="firstName"
                value={formState.firstName}
                onChange={(e) => setInput('firstName', e.target.value)}
                isRequired={true}
            />
            <TextField
                name="lastName"
                placeholder="Last name"
                value={formState.lastName}
                onChange={(e) => setInput('lastName', e.target.value)}
                isRequired={true}
                marginTop="15px"
            />
            <Button variation="primary" type="submit" marginTop="15px">
                Submit
            </Button>
        </View>
    );
}

export default HomePage;

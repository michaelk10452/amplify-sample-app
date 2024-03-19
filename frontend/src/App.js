// import React, { useState } from 'react';
// import { generateClient } from 'aws-amplify/api';
// import { createSubmission } from './graphql/mutations';

// function App() {
//   const [formState, setFormState] = useState({ firstName: '', lastName: '' });
//   const client = generateClient();
//   const envName = process.env.REACT_APP_USER_BRANCH_QA;
//   console.log(envName)

//   function setInput(key, value) {
//     setFormState({ ...formState, [key]: value });
//   }

//   async function addSubmission() {
//     try {
//       if (!formState.firstName || !formState.lastName) return;
//       const submission = { ...formState };
//       await client.graphql({
//         query: createSubmission,
//         variables: { input: submission }
//       });
//       alert('Submission successful!');
//       console.log(formState.firstName, formState.lastName)
//       setFormState({ firstName: '', lastName: '' }); // Reset form after submission
//     } catch (err) {
//       console.error('Error adding submission:', err);
//     }
//   }

//   return (
//     <div className="App">
//       <h2>My Submission Form</h2>
//       <p>Environment: {envName}</p>
//       <input
//         onChange={event => setInput('firstName', event.target.value)}
//         value={formState.firstName}
//         placeholder="First name"
//       />
//       <input
//         onChange={event => setInput('lastName', event.target.value)}
//         value={formState.lastName}
//         placeholder="Last name"
//       />
//       <button onClick={addSubmission}>Submit</button>
//     </div>
//   );
// }

// export default App;
// import { withAuthenticator } from '@aws-amplify/ui-react';
// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { getCurrentUser } from '@aws-amplify/auth';
// import HomePage from './HomePage';
// import { signOut } from 'aws-amplify/auth';
// import SubmissionsList from './SubmissionsList';
// import { AppBar, Toolbar, Button, Typography } from '@mui/material';
// // import { Authenticator } from '@aws-amplify/ui-react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { blueGrey } from '@mui/material/colors';



// // const ProtectedSubmissionsPage = withAuthenticator(SubmissionsList);
// const theme = createTheme({
//   palette: {
//     primary: blueGrey,
//   },
// });
// const envName = process.env.REACT_APP_USER_BRANCH_QA;

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//       // Check the current user on initial load
//       checkCurrentUser();
//   }, []);

//   async function checkCurrentUser() {
//       try {
//           const userData = await getCurrentUser();
//           setUser(userData);
//           setIsAuthenticated(true);
//       } catch (error) {
//           console.error('Not signed in', error);
//           setIsAuthenticated(false);
//       }
//   }

//   const handleSignOut = async () => {
//       try {
//           await signOut();
//           setIsAuthenticated(false);
//           setUser(null);
//       } catch (error) {
//           console.error('Error signing out: ', error);
//       }
//   };

  



  // ********************************************************************

//   return (
//     <Router>
//         <nav>
//             <Link to="/">Home</Link>
//             {isAuthenticated ? (
//                 <>
//                     <Link to="/submissions">View Submissions</Link>
//                     <button onClick={handleSignOut}>Sign Out</button>
//                 </>
//             ) : (
//                 <Link to="/login">Sign In</Link> // Change this to /login or another route you prefer for signing in
//             )}
//         </nav>
//         <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/login" element={<ProtectedSubmissionsPage />} /> // Change /submissions to /login for clarity
//             <Route path="/submissions" element={<SubmissionsList />} />
//         </Routes>
//     </Router>
// );

// ********************************************************************
//       return (
//         <ThemeProvider theme={theme}>
//         <Router>
//           <AppBar position="static">
//             <Toolbar>
//               <Typography variant="h6" sx={{ flexGrow: 1 }}>My App {envName}</Typography>
//               <Button color="inherit" component={Link} to="/">Home</Button>
//               {isAuthenticated ? (
//                 <>
//                 <Button color="inherit" component={Link} to="/submissions">View Submissions</Button>
//                 <Button color="inherit" onClick={handleSignOut} component= {Link} to="/">Sign Out</Button>
//                 </>
//               ) : (
//                   <Button color="inherit" component={Link} to="/submissions">Sign In</Button>
//               )}
//             </Toolbar>
//           </AppBar>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             {/* Apply protection directly to the route */}
//             <Route path="/submissions" element={<SubmissionsList />} />
//           </Routes>
//         </Router>
//         </ThemeProvider>
//       );
// }

// export default App;


//****************************** AMPLIFY UI LIBRARY */

// import { withAuthenticator, Authenticator, View, Button, Heading } from '@aws-amplify/ui-react';
// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { getCurrentUser, signOut } from 'aws-amplify/auth';
// import HomePage from './HomePage';
// import SubmissionsList from './SubmissionsList';
// import { CustomThemeProvider, useThemeContext } from './themeContext';

// const ProtectedSubmissionsPage = withAuthenticator(SubmissionsList);

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);
  
//   useEffect(() => {
//     // Check the current user on initial load
//     checkCurrentUser();
//   }, []);
  
//   async function checkCurrentUser() {
//     try {
//       await getCurrentUser();
//       setIsAuthenticated(true);
//     } catch (error) {
//       console.error('Not signed in', error);
//       setIsAuthenticated(false);
//     }
//   }
  
//   const handleSignOut = async () => {
//     try {
//       await signOut();
//       setIsAuthenticated(false);
//       setUser(null);
//     } catch (error) {
//       console.error('Error signing out: ', error);
//     }
//   };
  
//   return (
//     <CustomThemeProvider>
//       <Router>
//         <View padding="10px" borderBottom="1px solid #ccc">
//           <Heading level={3}>My App</Heading>
//           <nav style={{ marginTop: '10px' }}>
//             <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
//             {isAuthenticated ? (
//               <>
//                 <Link to="/submissions" style={{ margin: '0 10px' }}>View Submissions</Link>
//                 <Button onClick={handleSignOut}>Sign Out</Button>
//               </>
//             ) : (
//                 <Link to="/submissions" style={{ margin: '0 10px' }}>Sign In</Link>
//             )}
//           </nav>
//         </View>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/submissions" element={<ProtectedSubmissionsPage />} />
//         </Routes>
//       </Router>
//     </CustomThemeProvider>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getCurrentUser, signOut } from '@aws-amplify/auth';
import HomePage from './HomePage';
import SubmissionsList from './SubmissionsList';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

// Define the application's theme using Material UI's theming capabilities
const theme = createTheme({
  palette: {
    primary: blueGrey, // Sets the primary color for the theme
  },
});

// Optionally use an environment variable to specify the deployment environment (QA, prod, etc.)
const envName = process.env.REACT_APP_USER_BRANCH_QA;

function App() {
  // State variables to track authentication status and user information
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Effect hook to check the current user's authentication status on initial load
  useEffect(() => {
    checkCurrentUser();
  }, []);

  // Function to check if a user is currently signed in using Amplify's Auth library
  async function checkCurrentUser() {
    try {
      const userData = await getCurrentUser();
      setUser(userData);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Not signed in', error);
      setIsAuthenticated(false);
    }
  }

  // Function to sign out the current user using Amplify's Auth library
  const handleSignOut = async () => {
    try {
      await signOut();
      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  // The application's UI, wrapped in a ThemeProvider for consistent theming
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* AppBar for top navigation, changes based on user authentication status */}
        <AppBar position="static">
          <Toolbar>
            {/* App name and environment name (if specified) displayed in the AppBar */}
            <Typography variant="h6" sx={{ flexGrow: 1 }}>My App ({envName})</Typography>
            {/* Navigation Links */}
            <Button color="inherit" component={Link} to="/">Home</Button>
            {isAuthenticated ? (
              // Links shown when the user is authenticated
              <>
                <Button color="inherit" component={Link} to="/submissions">View Submissions</Button>
                <Button color="inherit" onClick={handleSignOut} component={Link} to="/">Sign Out</Button>
              </>
            ) : (
              // Link shown when the user is not authenticated
              <Button color="inherit" component={Link} to="/submissions">Sign In</Button>
            )}
          </Toolbar>
        </AppBar>
        {/* Application Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/submissions" element={<SubmissionsList />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;



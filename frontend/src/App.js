import React, { useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { createSubmission } from './graphql/mutations';

function App() {
  const [formState, setFormState] = useState({ firstName: '', lastName: '' });
  const client = generateClient();
  const envName = process.env.REACT_APP_USER_BRANCH_DEV;

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function addSubmission() {
    try {
      if (!formState.firstName || !formState.lastName) return;
      const submission = { ...formState };
      await client.graphql({
        query: createSubmission,
        variables: { input: submission }
      });
      alert('Submission successful!');
      console.log(formState.firstName, formState.lastName)
      setFormState({ firstName: '', lastName: '' }); // Reset form after submission
    } catch (err) {
      console.error('Error adding submission:', err);
    }
  }

  return (
    <div className="App">
      <h2>My Submission Form</h2>
      <p>Environment: {envName}</p>
      <input
        onChange={event => setInput('firstName', event.target.value)}
        value={formState.firstName}
        placeholder="First name"
      />
      <input
        onChange={event => setInput('lastName', event.target.value)}
        value={formState.lastName}
        placeholder="Last name"
      />
      <button onClick={addSubmission}>Submit</button>
    </div>
  );
}

export default App;

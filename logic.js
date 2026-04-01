// Data Normalization & Template Merging Logic
// Used within n8n Code Nodes to ensure 100% data integrity

const leads = items;

return leads.map(item => {
  // Ensure the email is lowercase to prevent duplicates
  const email = item.json.email ? item.json.email.toLowerCase().trim() : '';
  
  // Clean up the first name for the personalized greeting
  const firstName = item.json.first_name ? item.json.first_name.charAt(0).toUpperCase() + item.json.first_name.slice(1) : 'there';

  return {
    json: {
      ...item.json,
      normalizedEmail: email,
      personalizedGreeting: `Hi ${firstName},`,
      // Logic for dynamic body updates based on contact status
      finalBody: item.json.template_body.replace('{{name}}', firstName)
    }
  };
});

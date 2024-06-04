/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function greet(name) {
    return 'Hello, ' + name + '!';
  }
  console.log(greet('World'));
  
  // Arrow Function With Parameters
  const greetArrow = (name) => {
    return 'Hello, ' + name + '!';
  };
  console.log(greetArrow('World'));
  
  // Single Line Arrow Function With Parameters
  const greetSingleLine = (name) => 'Hello, ' + name + '!';
  console.log(greetSingleLine('World'));
  
  // Implicit Returns
  const greetImplicit = name => 'Hello, ' + name + '!';
  console.log(greetImplicit('World'));
  
  // Returning Multiple Lines
  const greetMultiLine = name => {
    const greeting = 'Hello, ';
    return greeting + name + '!';
  };
  console.log(greetMultiLine('World'));
  

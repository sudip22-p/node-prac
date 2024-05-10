/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('learnMERN');

// Insert a few documents into the sport collection.
db.getCollection('sports').insertMany([
  { 'sport': 'football', 'team': 'A', 'score': 3, 'date': new Date('2022-05-01T15:30:00Z') },
  { 'sport': 'basketball', 'team': 'B', 'score': 92, 'date': new Date('2022-05-01T16:45:00Z') },
  { 'sport': 'tennis', 'player': 'C', 'points': 45, 'date': new Date('2022-05-02T10:00:00Z') },
  { 'sport': 'football', 'team': 'D', 'score': 2, 'date': new Date('2022-05-03T14:00:00Z') },
  { 'sport': 'basketball', 'team': 'E', 'score': 84, 'date': new Date('2022-05-04T17:15:00Z') },
  { 'sport': 'tennis', 'player': 'F', 'points': 60, 'date': new Date('2022-05-05T11:30:00Z') }
]);



// Print a message to the output window.
console.log(`Success--haha done`);

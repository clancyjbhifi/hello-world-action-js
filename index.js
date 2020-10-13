const core = require('@actions/core');

try {
  const nameToGreet = core.getInput('who');
  console.log(`Hello ${nameToGreet}!`);
} catch (error) {
  core.setFailed(error.message);
}
/*global module */
/*global console */

const newLine = /\n/g;
const encodedNewLine = "%0A";
const lineAndColumnInStackTrace = /:([0-9]+):([0-9]+)/;

module.exports = class GithubActionJestReporter {
  onRunComplete(_contexts, results) {
    results.testResults.forEach(({ testFilePath, testResults }) => {
      testResults
        .filter(r => r.status === "failed")
        .flatMap(r => r.failureMessages)
        .forEach(message => {
          const captureGroup = message.match(lineAndColumnInStackTrace);

          if (!captureGroup) {
            console.log('Unable to extract line number from call stack:', testFilePath)
            console.log(message);
            return;
          }

          const [, line, col] = captureGroup;
          console.log(`::error file=${testFilePath},line=${line},col=${col}::${message.replace(newLine, encodedNewLine)}`);
        });
    })
  }
}

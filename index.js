const core = require('@actions/core');
const github = require('@actions/github');
const { WebClient } = require('@slack/web-api');
const fs = require('fs');

try {
    const SLACK_TOKEN = core.getInput('SLACK_TOKEN');
    const SHARE_FILE = core.getInput('SHARE_FILE');
    const SLACK_CHANNEL = core.getInput('SLACK_CHANNEL');
    const FILE_PATH = core.getInput('FILE_PATH');
    const SLACK_MESSAGE = core.getInput('SLACK_MESSAGE');
    const SEND_COMMIT_MESSAGE = core.getInput('SEND_COMMIT_MESSAGE');

    const web = new WebClient(SLACK_TOKEN);
var slackMessage=SLACK_MESSAGE;
if(SEND_COMMIT_MESSAGE===true){
    slackMessage=github.event.head_commit.message
}
    if (SHARE_FILE===true) {
        (async () => {

            // Post a message to the channel, and await the result.
            // Find more arguments and details of the response: https://api.slack.com/methods/chat.postMessage
            const result = await web.files.upload({
                channels: SLACK_CHANNEL,
                initial_comment: slackMessage,
                file: fs.createReadStream(FILE_PATH)
            });

            // The result contains an identifier for the message, `ts`.
            console.log(`Successfully send message ${result.ts} in conversation ${SLACK_CHANNEL}`);
        })();

    }
    else{
        (async () => {
 
            // Post a message to the channel, and await the result.
            // Find more arguments and details of the response: https://api.slack.com/methods/chat.postMessage
            const result = await web.chat.postMessage({
              text: slackMessage,
              channel: SLACK_CHANNEL,
            });
           
            // The result contains an identifier for the message, `ts`.
            console.log(`Successfully send message ${result.ts} in conversation ${SLACK_CHANNEL}`);
          })();
    }
} catch (error) {
    core.setFailed(error.message);
}
# slack-share action

This actions lets you share files/messages to slack channels.
## Inputs

### `SLACK_TOKEN`

**Required** Your slack token. Default `"No Token"`.

### `SHARE_FILE`

**Required** Set true if you want to share file. Default `"false"`.

### `SLACK_CHANNEL`

**Required** Name of channel you want to interact with. Default `"general"`.

### `FILE_PATH`

**Optional** Path of file you want to share on slack. Default `""`.

### `SLACK_MESSAGE`

**Optional** The message you want to send. Default `""`.






## Example usage

uses: samvitjain/slack-share@v1.0
with:
  SLACK_TOKEN: 'Your token'
  SHARE_FILE: true
  SLACK_CHANNEL: 'random'
  FILE_PATH:'your/file/path'
  SLACK_MESSAGE:'Your Slack message'

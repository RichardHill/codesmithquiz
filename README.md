# codesmithquiz

An example of quiz app using Serverless and web sockets

To test this over the command line install wscat -: https://www.npmjs.com/package/wscat

Next step is to find out the name of the ID of the API Gateway end point. You can find this by navigating to your
AWS account and then API Gateway. In the menu on the left hand side select 'Stages'. Select the stage you wish to
connect to and make a note of the WebSocket URL that appears.

Example -:

    WebSocket URL: wss://89hzc0rozg.execute-api.eu-west-2.amazonaws.com/dev
    Connection URL: https://89hzc0rozg.execute-api.eu-west-2.amazonaws.com/dev/@connections

The API ID is the first set of 9 letters after the first leading forward slashes. In this example -: 89hzc0rozg

# Example Command Line Code -:

1. To Connect -:

wscat -c wss://{ApiId}.execute-api.us-east-1.amazonaws.com/{ApiStage}

    An example -:
        wscat -c wss://89hzc0rozg.execute-api.us-east-1.amazonaws.com/dev

q30217pgp7

wscat -c wss://q30217pgp7.execute-api.eu-west-2.amazonaws.com/dev

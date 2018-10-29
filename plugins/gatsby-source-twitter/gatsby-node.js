const Twitter = require('twitter');
const crypto = require('crypto');
const { twitterType } = require('./schema');

function md5(str) {
  return crypto.createHash('md5').update(str).digest('hex');
}

function generateNode(tweet) {
  const contentDigest = md5(JSON.stringify(tweet));
  const id = md5(tweet.id_str);

  const nodeData = {
    id: id,
    children: [],
    parent: `__SOURCE__`,
    internal: {
      type: `Tweet`,
      contentDigest,
    },
  };

  if (tweet && tweet.place && tweet.place.bounding_box) {
    delete tweet.place.bounding_box;
    tweet.place.bounding_box = null;
  }

  return Object.assign({}, tweet, nodeData);
}

exports.sourceNodes = ({ actions }, {
  credentials,
  count = 100,
  tweet_mode = 'compat',
  result_type = 'mixed',
  screen_name,
}) => {
  const { createNode } = actions;
  const client = new Twitter(credentials);

  client.get('statuses/user_timeline', {
    screen_name,
    count,
    include_entities: true,
    tweet_mode,
    result_type,
  }).then(tweets => {
    tweets.forEach(tweet => createNode(generateNode(tweet)));
  });
};

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name !== 'Tweet') return {};
  return twitterType;
};

const crypto = require('crypto');
const fetch = require('node-fetch');
const qs = require('query-string');

exports.sourceNodes = (gatsby, configOptions) => {
  const { boundActionCreators: { createNode }, createNodeId } = gatsby;
  const { path, query } = configOptions;

  const processPost = post => {
    const nodeId = createNodeId(`reddit-post-${post.id}`);
    const nodeContent = JSON.stringify(post);

    const nodeContentDigest = crypto
      .createHash('md5')
      .update(nodeContent)
      .digest('hex');

    return Object.assign({}, post, {
      children: [],
      id: nodeId,
      parent: null,
      internal: {
        type: 'RedditPost',
        content: nodeContent,
        contentDigest: nodeContentDigest,
      },
    });
  };

  return fetch(`https://www.reddit.com/${path}.json?${qs.stringify(query)}`)
    .then(response => response.json())
    .then(({ data }) => {
      data.children.forEach(({ data }) => createNode(processPost(data)));
    });
};

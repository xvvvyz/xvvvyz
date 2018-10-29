const crypto = require('crypto');
const fetch = require('node-fetch');
const get = require('lodash.get');
const qs = require('query-string');

exports.sourceNodes = (gatsby, configOptions) => {
  const { actions: { createNode }, createNodeId } = gatsby;
  const { queries } = configOptions;

  const processEntity = ({ entity, entityType, idLocation = 'id' }) => {
    const nodeId = createNodeId(`${entityType}-${get(entity, idLocation)}`);
    const nodeContent = JSON.stringify(entity);

    const nodeContentDigest = crypto
      .createHash('md5')
      .update(nodeContent)
      .digest('hex');

    return Object.assign({}, entity, {
      children: [],
      id: nodeId,
      parent: null,
      internal: {
        type: entityType,
        content: nodeContent,
        contentDigest: nodeContentDigest,
      },
    });
  };

  return Promise.all(queries.map(({ entities, path, queryParams }) => {
    const queryString = qs.stringify(queryParams);

    return fetch(`https://www.reddit.com/${path}.json?${queryString}`)
      .then(response => response.json())
      .then(data => {
        for (const entity of entities) {
          const entityData = get(data, entity.location, data);

          if (Array.isArray(entityData)) {
            for (const node of entityData) {
              createNode(processEntity({
                entity: get(node, entity.map, node),
                entityIdLocation: entity.idLocation,
                entityType: entity.name,
              }));
            }
          } else {
            createNode(processEntity({
              entity: entityData,
              entityIdLocation: entity.idLocation,
              entityType: entity.name,
            }));
          }
        }
      });
  }));
};

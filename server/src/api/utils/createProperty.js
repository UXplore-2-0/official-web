const { Properties } = require('../models');

async function createProperty() {
  // create the question property
  const questionProperty = await Properties.findOne({
    where: {
      property_name: 'question',
    },
  });

  if (questionProperty) {
    console.log('Question property already exists');
    return;
  }

  try {
    const questionProperty = await Properties.build({
      property_name: 'question',
      property_value: '',
    });

    const questionLinkProperty = await Properties.build({
      property_name: 'question_link',
      property_value: '',
    });

    const timeProperty = await Properties.build({
      property_name: 'time',
      property_value: '',
    });

    const zoomLinkProperty = await Properties.build({
      property_name: 'zoom_link',
      property_value: '',
    });

    const messageProperty = await Properties.build({
      property_name: 'message',
      property_value: '',
    });

    const status = await Properties.build({
      property_name: 'status',
      property_value: 'inactive',
    });

    // save the question property to the database
    await questionProperty.save();
    await questionLinkProperty.save();
    await timeProperty.save();
    await zoomLinkProperty.save();
    await messageProperty.save();
    await status.save();
  } catch (error) {
    console.log('Error creating properties', error);
    logger.error('Error creating properties', error);
    logger.error('Shutting down the server...');
    process.exit(1);
  }
}

module.exports = createProperty;

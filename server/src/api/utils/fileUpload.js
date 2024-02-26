const { BlobServiceClient } = require('@azure/storage-blob');

const connStr = process.env.AZURE_CONNECTION_STRING || null;

// storage account credentials
const blobServiceClient = BlobServiceClient.fromConnectionString(connStr);
const containerName = process.env.BLOB_CONTAINER_NAME;

function getNormalBlobName(fileName, team_id, team_name) {
  return `${team_id}_${team_name}_${fileName}`;
}

async function uploadFileToBlob(fileName, team_id, team_name, file) {
  try {
    const containerClient = blobServiceClient.getContainerClient(containerName);

    // make a unique name for the uploaded blob
    const blobName = getNormalBlobName(fileName, team_id, team_name);

    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    // upload the file to the blob storage
    const uploadBlobResponse = await blockBlobClient.uploadData(
      file.buffer,
      file.size
    );

    return generateBlobUrl(blobName);
  } catch (err) {
    console.log(err);
    return { error: err };
  }
}

function generateBlobUrl(blobName) {
  return `https://${process.env.AZURE_STORAGE_ACCOUNT}.blob.core.windows.net/${containerName}/${blobName}`;
}

module.exports = {
  uploadFileToBlob,
};

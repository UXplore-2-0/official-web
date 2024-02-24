import { BlobServiceClient, AnonymousCredential } from "@azure/storage-blob";
// import path from "path";

const connStr = import.meta.env.VITE_AZURE_CONNECTION_STRING || null;

// storage account credentials
// const blobServiceClient = BlobServiceClient.fromConnectionString(connStr);
const containerName = import.meta.env.VITE_BLOB_CONTAINER_NAME;

function getNormalBlobName(teamId, teamName, filePath) {
  return `${teamId}-${teamName}`;
}

async function uploadFileToBlob(filePath, teamId, teamName) {
  try {
    const blobServiceClient = new BlobServiceClient(
      `https://${
        import.meta.env.VITE_AZURE_STORAGE_ACCOUNT
      }.blob.core.windows.net`,
      new AnonymousCredential()
    );

    const containerName = `${import.meta.env.VITE_BLOB_CONTAINER_NAME}`;
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blobName = getNormalBlobName(teamId, teamName, filePath);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    await blockBlobClient.uploadBrowserData(filePath);
    console.log("File uploaded successfully!");

    return generateBlobUrl(blobName);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}

function generateBlobUrl(blobName) {
  return `https://${
    import.meta.env.VITE_AZURE_STORAGE_ACCOUNT
  }.blob.core.windows.net/${containerName}/${blobName}`;
}

export { uploadFileToBlob };

public class queueservice {

    const { QueueServiceClient, StorageSharedKeyCredential } = require('@azure/storage-queue');
const { queue } = require('async');

    require('dotenv').config();

    async function main() {
  const account = 'imqamessagequeue' || '';
  const accountKey =
                'GtYysAWohlD+k0KLOYCRFJ4AdtpAVoTOQqmMVh90Cfd4BHXW2MNwEVmL+q8EpSJ6QY8P0zFhwXuL+AStLU/EfA==' ||
                        '';

  const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);

  const queueServiceClient = new QueueServiceClient(
                `https://imqamessagequeue.queue.core.windows.net`,
        sharedKeyCredential,
  );

  const queueClient = queueServiceClient.getQueueClient('put-project');


//  const createQueueResponse = await queueClient.create();
//        console.log(
//                1: addProject.id, 2: checkUser.id
//                );

        queueClient.sendMessage(JSON.stringify(createQueueResponse));
    }

    main().catch(error => {
        console.error(error);
        process.exit(1);
    });

    module.exports = { main };
}

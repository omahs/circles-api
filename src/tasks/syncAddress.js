import Queue from 'bull';

import processor from './processor';
import submitJob from './submitJob';
import tasks from './';
import {
  processTrustEvent,
  processTransferEvent,
} from '../services/edgesFromEvents';
import { redisUrl, redisOptions } from '../services/redis';

const syncAddress = new Queue('Sync trust graph for address', redisUrl, {
  settings: redisOptions,
});

processor(syncAddress).process(async (job) => {
  // This job is either triggered by a trust event or a transfer event.
  if (job.data.type === 'Transfer') {
    await processTransferEvent(job.data);
  } else {
    await processTrustEvent(job.data);
  }

  // Always write edges .json file afterwards
  submitJob(
    tasks.exportEdges,
    `exportEdges-after-chain-event-${job.data.transactionHash}`,
  );
});

export default syncAddress;

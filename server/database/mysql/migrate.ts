import * as fs from 'fs';
import * as path from 'path';
import { spawn } from 'child_process';
import * as dotenv from 'dotenv';
import logger from "@/helpers/logger";


dotenv.config();

const schemaDir = path.join(__dirname, 'schemas');

const command = 'mysql';
const args = [
  '-u',
  process.env.MYSQL_USER || 'root',
  '-p' + (process.env.MYSQL_PASSWORD || ''),
  'binasta_node',
];

const child = spawn(command, args);

// Increase the maximum number of listeners for the 'error' event
child.setMaxListeners(15);

child.stdout.on('data', (data) => {
  logger.info(`Spawn stdout data: ${data}`);
});

child.stdin.on('data', (data) => {
  logger.info(`Spawn stdin data: ${data}`);
});

child.stderr.on('data', (data) => {
  logger.info(`Spawn stderr data: ${data}`);
});

async function migrate(file: string) {
  // Make sure it's an SQL file
  if (file.split('.').pop() === 'sql') {
    logger.info(`Migrating: ${file}`);
    const filename = path.join(__dirname, 'schemas', file);

    const fileStream = fs.createReadStream(filename);
    fileStream.on('error', (err) => {
      logger.error(`Error reading ${filename}: ${err}`);
    });

    fileStream.on('end', () => {
      fileStream.unpipe(child.stdin);
      fileStream.destroy();
    });

    fileStream.pipe(child.stdin);

    child.on('close', (code, signal) => {
      fileStream.unpipe(child.stdin);
      if (code === 0) {
        logger.info(`${filename} migrated successfully`);
      } else {
        logger.error(`Migration failed with code ${code} and signal ${signal}`);
      }
    });
  } else {
    logger.info(`${file} doesn't seem to be an SQL file`);
  }
}

fs.readdir(schemaDir, async (err, files) => {
  if (err) {
    logger.error(`Error reading directory: ${schemaDir}`);
    return;
  }

  for (const file of files) {
    await migrate(file);
  }
});
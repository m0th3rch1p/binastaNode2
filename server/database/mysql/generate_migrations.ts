import fs from 'fs';
import path from 'path';
import logger from "@/helpers/logger";


const table = process.env.npm_config_table;
const fileName = `${Date.now()}_${table}_table.sql`;
const filePath = path.join(__dirname, 'schemas', fileName);

async function generate_migrate (filePath: string, fd: number, err: NodeJS.ErrnoException | null) {
  if (err) {
    if (err.code === 'EEXIST') {
      logger.info('Migration file already exists.');
    } else {
      logger.error(`Error opening migration file: ${err}`);
    }
    return;
  }

  const stream = fs.createWriteStream('', {fd});

  stream.write(`CREATE TABLE IF NOT EXISTS ${table}(
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,

  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
  );`);

  stream.end();

  stream.on('finish', () => {
    logger.info('Migration file created successfully.');
    fs.close(fd, (closeErr) => {
      if (closeErr) {
        logger.error(`Error closing migration file: ${closeErr}`);
      }
    });
  });

  stream.on('error', (err) => {
    logger.error(`Error writing to migration file: ${err}`);
    fs.close(fd, (closeErr) => {
      if (closeErr) {
        logger.error(`Error closing migration file: ${closeErr}`);
      }
    });
  });
}

fs.open(filePath, 'wx', async (err, fd) => {
  await generate_migrate(filePath, fd, err);
});

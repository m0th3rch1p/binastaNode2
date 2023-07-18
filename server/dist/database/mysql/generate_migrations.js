"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const logger_1 = __importDefault(require("../../helpers/logger"));
const table = process.env.npm_config_table;
const fileName = `${Date.now()}_${table}_table.sql`;
const filePath = path_1.default.join(__dirname, 'schemas', fileName);
async function generate_migrate(filePath, fd, err) {
    if (err) {
        if (err.code === 'EEXIST') {
            logger_1.default.info('Migration file already exists.');
        }
        else {
            logger_1.default.error(`Error opening migration file: ${err}`);
        }
        return;
    }
    const stream = fs_1.default.createWriteStream('', { fd });
    stream.write(`CREATE TABLE IF NOT EXISTS ${table}(
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,

  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
  );`);
    stream.end();
    stream.on('finish', () => {
        logger_1.default.info('Migration file created successfully.');
        fs_1.default.close(fd, (closeErr) => {
            if (closeErr) {
                logger_1.default.error(`Error closing migration file: ${closeErr}`);
            }
        });
    });
    stream.on('error', (err) => {
        logger_1.default.error(`Error writing to migration file: ${err}`);
        fs_1.default.close(fd, (closeErr) => {
            if (closeErr) {
                logger_1.default.error(`Error closing migration file: ${closeErr}`);
            }
        });
    });
}
fs_1.default.open(filePath, 'wx', async (err, fd) => {
    await generate_migrate(filePath, fd, err);
});

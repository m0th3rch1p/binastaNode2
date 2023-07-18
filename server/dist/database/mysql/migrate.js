"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const child_process_1 = require("child_process");
const dotenv = __importStar(require("dotenv"));
const logger_1 = __importDefault(require("../../helpers/logger"));
dotenv.config();
const schemaDir = path.join(__dirname, 'schemas');
const command = 'mysql';
const args = [
    '-u',
    process.env.MYSQL_USER || 'root',
    '-p' + (process.env.MYSQL_PASSWORD || ''),
    'binasta_node',
];
const child = (0, child_process_1.spawn)(command, args);
// Increase the maximum number of listeners for the 'error' event
child.setMaxListeners(15);
child.stdout.on('data', (data) => {
    logger_1.default.info(`Spawn stdout data: ${data}`);
});
child.stdin.on('data', (data) => {
    logger_1.default.info(`Spawn stdin data: ${data}`);
});
child.stderr.on('data', (data) => {
    logger_1.default.info(`Spawn stderr data: ${data}`);
});
async function migrate(file) {
    // Make sure it's an SQL file
    if (file.split('.').pop() === 'sql') {
        logger_1.default.info(`Migrating: ${file}`);
        const filename = path.join(__dirname, 'schemas', file);
        const fileStream = fs.createReadStream(filename);
        fileStream.on('error', (err) => {
            logger_1.default.error(`Error reading ${filename}: ${err}`);
        });
        fileStream.on('end', () => {
            fileStream.unpipe(child.stdin);
            fileStream.destroy();
        });
        fileStream.pipe(child.stdin);
        child.on('close', (code, signal) => {
            fileStream.unpipe(child.stdin);
            if (code === 0) {
                logger_1.default.info(`${filename} migrated successfully`);
            }
            else {
                logger_1.default.error(`Migration failed with code ${code} and signal ${signal}`);
            }
        });
    }
    else {
        logger_1.default.info(`${file} doesn't seem to be an SQL file`);
    }
}
fs.readdir(schemaDir, async (err, files) => {
    if (err) {
        logger_1.default.error(`Error reading directory: ${schemaDir}`);
        return;
    }
    for (const file of files) {
        await migrate(file);
    }
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const schemaDir = path_1.default.join(__dirname, 'schemas');
const command = "mysql";
const args = [
    '-u',
    process.env.MYSQL_USER || "root",
    '-p' + process.env.MYSQL_PASSWORD || "",
    'binasta_node',
];
const child = (0, child_process_1.spawn)(command, args);
child.stdout.on('data', (data) => {
    console.log(`Spawn stdout data: ${data}`);
});
child.stdin.on('data', (data) => {
    console.log(`Spawn stdin data: ${data}`);
});
child.stderr.on('data', (data) => {
    console.log(`Spawn stderr data: ${data}`);
});
async function migrate(file) {
    //Make sure its an sql file
    if ((file.split('.')[1]) === "sql") {
        console.info(`Migrating:  ${file}`);
        const filename = path_1.default.join(__dirname, 'schemas', file);
        const fileStream = fs_1.default.createReadStream(filename);
        fileStream.on('error', (err) => {
            console.error(`Error reading ${filename}: ${err}`);
        });
        fileStream.on('end', () => {
            fileStream.unpipe(child.stdin);
            fileStream.destroy();
        });
        fileStream.pipe(child.stdin);
        child.on('close', (code, signal) => {
            fileStream.unpipe(child.stdin);
            if (code === 0) {
                console.log(`${filename} migrated successfully`);
            }
            else {
                console.error(`Migration failed with code ${code} and signal ${signal}`);
            }
        });
    }
    else {
        console.log(`${file} doesn't seem to be an sql file`);
    }
}
fs_1.default.readdir(schemaDir, (err, files) => {
    if (err) {
        console.error(`Error reading directory: ${schemaDir}`);
        return;
    }
    files.forEach(async (file) => {
        await migrate(file);
    });
});

import { exec } from 'child_process';

const RED = '\x1b[31m%s\x1b[0m';
const GREEN = '\x1b[32m%s\x1b[0m';

export const WEEKS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// -------------------------------------------------------------

export const pad = (x: number, y: number = 3) => x.toString().padStart(y, '0');
export const error = (msg: string) => console.log(RED, msg);
export const success = (msg: string) => console.log(GREEN, msg);

export const open = (path: string, vscode: boolean) => {
  if (!vscode) return;

  exec(`code ${path}`, (error, stdout, stderr) => {
    if (error) return console.log(`error: ${error.message}`);
    if (stderr) return console.log(`stderr: ${stderr}`);
    // console.log(`stdout: ${stdout}`);
    success(`\n\topening ${path}`);
  });
};

// -------------------------------------------------------------

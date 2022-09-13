import { exec } from 'child_process';
import fs from 'fs';

const RED = '\x1b[31m%s\x1b[0m';
const GREEN = '\x1b[32m%s\x1b[0m';

const weeks = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
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

const pad = (x, y = 3) => x.toString().padStart(y, '0');
const error = (msg) => console.log(RED, msg);
const success = (msg) => console.log(GREEN, msg);

const open = (path, vscode) => {
  if (!vscode) return;

  exec(`code ${path}`, (error, stdout, stderr) => {
    if (error) return console.log(`error: ${error.message}`);
    if (stderr) return console.log(`stderr: ${stderr}`);
    // console.log(`stdout: ${stdout}`);
    success(`\n\topening ${path}`);
  });
};

// -------------------------------------------------------------

/**
 * generates a day.md template
 * @param {Object} user - challenger infos
 * @param {string} user.name - any name that you're comfortable with
 * @param {string} user.github - your github username
 * @param {string} user.start - the date that you will start this challenge (e.g. m/d/yyyy)
 * @param {number} [user.round=1] - the round of the current challenge
 * @param {boolean} [user.vscode=true] - whether to open the file after generating it
 */
export function run({ name, github, start, round = 1, vscode = true }) {
  const arg2 = process.argv[2];
  const validDate = /^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  let d = new Date();

  switch (true) {
    case /prev/.test(arg2):
      const prev = new Date(d.getTime());
      prev.setDate(d.getDate() - 1);
      d = prev;
      break;
    case /next/.test(arg2):
      const next = new Date(d.getTime());
      next.setDate(d.getDate() + 1);
      d = next;
      break;
    case validDate.test(arg2):
      const regexDate = new Date(arg2);
      d = regexDate;
      break;
  }

  const month = d.getMonth();
  const day = d.getDate();
  const year = d.getFullYear();

  const CURRENT = `${month + 1}/${day}/${year}`;

  const weekName = weeks[d.getDay()];
  const monthName = months[month];

  const diff = Math.floor((Date.parse(CURRENT) - Date.parse(start)) / 86400000) + 1;
  const [prevDay, nextDay] = [diff - 1, diff + 1];

  const currentDayChallenge = `Day ${diff}`;
  const currentDate = `${monthName} ${day}, ${year} - ${weekName}`;
  const today = `\n\t\t${currentDayChallenge}\n\t${currentDate}\n`;

  const header = `<div align="center">
  <h1>Round ${round}</h1>
  <p>${currentDayChallenge}</p>
  <sub>
    Author: <a href="https://github.com/${github}" target="_blank">${name}</a>
    <br>
    <small>${currentDate}</small>
  </sub>
</div>`;

  const contents = ["Today's Progress", 'Notes', 'Thoughts', 'Resources'];
  const content = contents.map((c) => `### ${c}:\n\n- TODO`).join('\n\n');

  const prevRoundLink = `[<< Round ${round}](README.md)`;
  const nextRoundLink = `[Round ${round} >>](README.md)`;

  const prevDayLink = `[<< Day ${prevDay}](day${pad(prevDay)}.md)`;
  const nextDayLink = `[Day ${nextDay} >>](day${pad(nextDay)}.md)`;

  const footer = `${prevDay === 0 ? prevRoundLink : prevDayLink} | ${nextDay === 101 ? nextRoundLink : nextDayLink}`;

  const template = `${header}\n\n${footer}\n\n${content}\n\n${footer}\n`;

  try {
    console.log(today);

    if (!fs.existsSync(`./Round-${round}`)) fs.mkdirSync(`./Round-${round}`);

    const path = `Round-${round}/day${pad(diff)}.md`;

    if (fs.existsSync(path)) {
      // for safety reasons, to avoid overwriting existing files
      error(`${path} already exists.`);
      error(`delete if you want to override it`);
    } else {
      fs.writeFileSync(path, template);
      success(`${path} created successfully`);
    }

    open(path, vscode);

  } catch (err) {
    console.error(err);
  }
}

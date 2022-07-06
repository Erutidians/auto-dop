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

const open = (path) => {
  exec(`code ${path}`, (error, stdout, stderr) => {
    if (error) return console.log(`error: ${error.message}`);
    if (stderr) return console.log(`stderr: ${stderr}`);
    // console.log(`stdout: ${stdout}`);
    success(`\n\topening ${path}`);
  });
};

// -------------------------------------------------------------

export function run({ name, github, start, round }) {
  let d = new Date();

  switch (process.argv[2]) {
    case 'prev':
      const prev = new Date(d.getTime());
      prev.setDate(d.getDate() - 1);
      d = prev;
      break;
    case 'next':
      const next = new Date(d.getTime());
      next.setDate(d.getDate() + 1);
      d = next;
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

  const content = `### Today's Progress:\n\n- TODO\n\n### Notes:\n\n- TODO\n\n### Thoughts:\n\n- TODO\n\n### Resources:\n\n- TODO`;

  const roundPrevLink = `[<< Round ${round}](README.md)`;
  const roundNextLink = `[Round ${round} >>](README.md)`;

  const prevDayLink = `[<< Day ${prevDay}](day${pad(prevDay)}.md)}`;
  const nextDayLink = `[Day ${nextDay} >>](day${pad(nextDay)}.md)`;

  const footer = `${prevDay === 0 ? roundPrevLink : prevDayLink} | ${nextDay === 101 ? roundNextLink : nextDayLink}`;

  const template = `${header}\n\n${footer}\n\n${content}\n\n${footer}\n`;

  try {
    console.log(today);

    if (!fs.existsSync(`./Round-${round}`)) fs.mkdirSync(`./Round-${round}`);

    const path = `Round-${round}/day${pad(diff)}.md`;

    if (fs.existsSync(path)) {
      // for safety reasons, to avoid overwriting existing files
      error(`${path} already exists.`);
      error(`delete if you want to override it`);
      open(path);
    } else {
      fs.writeFileSync(path, template);
      success(`${path} created successfully`);
      open(path);
    }
  } catch (err) {
    console.error(err);
  }
}

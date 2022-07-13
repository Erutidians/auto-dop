<div align="center">

![auto-dop-banner-dark](https://user-images.githubusercontent.com/57343545/177606703-a781a282-704f-4422-a969-92bdc6862f3e.png#gh-dark-mode-only)

![auto-dop-banner-light](https://user-images.githubusercontent.com/57343545/177606757-3ad56083-892c-4554-971f-a23910066ec2.png#gh-light-mode-only)

<p>
Automation for creating markdown files for 100 Days of Productivity challenge.
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@erutidians/auto-dop"><img src="https://img.shields.io/npm/v/@erutidians/auto-dop?color=c95f8b" alt="NPM version"></a></p>
</div>

This started as a challenge initially inspired by [Alexander Kallaway](https://github.com/Kallaway)'s [100-Days-of-Code](https://github.com/Kallaway/100-days-of-code). More info about our own challenge can be found [here](https://github.com/Erutidians/100-days-of-productivity)

## How to:

### Setup

<ul>
    <li>Using our <b>template repository</b></li>
    <ul>
        <li>generate from template by simply clicking the generate button in <a href='https://github.com/Erutidians/100-days-of-productivity' target='_blank'>here</a>.</li>
        <li>clone and go to your generated repository.</li>
        <pre><code>$ git clone https://github.com/your-username/your-generated-repository.git</code></pre>
        <li>then install</li>
        <pre><code>$ npm install</code></pre>
    </ul>
    <li>Or <b>manually</b>, if you already have your own repository</li>
    <ul>
        <li>install <code>@erutidians/auto-dop</code></li>
        <pre><code>$ npm install @erutidians/auto-dop</code></pre>
        <li>make sure you have this line to your <code>package.json</code></li>
        <pre><code>"type": "module"</code></pre>
        <li>you can compare your package.json to our package.json from our <a href='https://github.com/Erutidians/100-days-of-productivity' target='_blank'>template repository</a> if you encounter some problems.</li>
    </ul>
</ul>

### Use (Commands)

- creates today
    ```bash
    $ node index.js
    ```
- creates yesterday's
    ```bash
    $ node index.js prev
    ```
- creates tomorrow's
    ```bash
    $ node index.js next
    ```
- creates any date
    ```bash
    $ node index.js $date
    ```
    where `$date` can be any valid date format

### Contributing
Help is always welcome! Please head to [CONTRIBUTING.md](./CONTRIBUTING.md) file to see how to get started.

## Challengers

Note: if you want to add yourself here in the list, fork this repository and submit a PR and wait for it to be reviewed and merged. More details can be found at [CONTRIBUTING.md](./CONTRIBUTING.md) so <u>make sure to follow that</u> or else your PR <b>will be immediately closed</b>.

auto-dop has been used by these amazing challengers, check out their glorious journeys:

- [yrnmsk](https://github.com/yrnmsk/100-days-of-productivity)
- [plskz](https://github.com/plskz/100-days-of-productivity)

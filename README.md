<div align="center">

![auto-dop-banner](https://user-images.githubusercontent.com/57343545/177624833-3deb3e4b-c9c2-4e33-8fe8-a25004376eb7.png)

<p>
Automation for creating markdown files for 100 Days of Productivity challenge.
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@erutidians/auto-dop"><img src="https://img.shields.io/npm/v/@erutidians/auto-dop?color=c95f8b" alt="NPM version"></a></p>
</div>

This started as a challenge initially inspired by [Alexander Kallaway](https://github.com/Kallaway)'s [100-Days-of-Code](https://github.com/Kallaway/100-days-of-code). More info about our own challenge can be found [here](https://github.com/Erutidians/100-days-of-productivity)

## How to:

### Setup

- Using our **template repository**
    - generate from template by simply clicking the generate button in [here](https://github.com/Erutidians/100-days-of-productivity).
    - clone and go to your generated repository.

        ```bash
        $ git clone https://github.com/your-username/your-generated-repository.git
        ```

    - then install

        ```bash
        $ npm install
        ```

- Or **manually**, if you already have your own repository
    - install `@erutidians/auto-dop`

        ```bash
        $ npm install @erutidians/auto-dop
        ```

    - make sure you have this line to your `package.json`:

        ```json
        "type": "module"
        ```

    - you can compare your `package.json` from ours in our [template repository](https://github.com/Erutidians/100-days-of-productivity) if you encounter some problems.
    - create an `index.js` and paste this template code:

        ```js
        import { run } from '@erutidians/auto-dop';
        
        // ! change this.
        const user = {
        name: 'Palskie',   // change this to any name that you're comfortable with.
        github: 'plskz',   // your github username.
        start: '6/1/2022', // the date that you will start this challenge (e.g. m/d/yyyy)
        round: 1, // the round number you currently are in. (if omitted, defaults to 1)
        };

        run(user);
        ```

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
    where `$date` can be any valid date format (e.g. M/D/YYYY or MM/DD/YYYY)

### Contributing
Help is always welcome! Please head to [CONTRIBUTING.md](./CONTRIBUTING.md) file to see how to get started.

## Challengers

Note: if you want to add yourself here in the list, fork this repository and submit a PR and wait for it to be reviewed and merged. More details can be found at [CONTRIBUTING.md](./CONTRIBUTING.md/#challengers) so <u>make sure to follow that</u> or else your PR <b>will be immediately closed</b>.

auto-dop has been used by these amazing challengers, check out their glorious journeys:

- [yrnmsk](https://github.com/yrnmsk/100-days-of-productivity)
- [plskz](https://github.com/plskz/100-days-of-productivity)

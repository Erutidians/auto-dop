# auto-dop

auto-dop is an automation for the creation of markdown files for the [100 Days of Productivity](https://github.com/Erutidians/100-days-of-productivity) challenge that we (Erutidians) started, which was initially inspired by [Alexander Kallaway](https://github.com/Kallaway)'s [100-Days-of-Code](https://github.com/Kallaway/100-days-of-code).

## Table of Contents:

- [Features](#features)
- [How to:](#how-to)
    - [Use](#use)
    - [Make a Suggestion](#make-a-suggestion)
    - [Make a Contribution](#make-a-contribution)
- [Challengers](#challengers)

## Features

<!-- TODO -->

## How to:

### Use

<!-- gawin mo tong accordion. ilagay mo nalang yung template repo -->
<!-- tas explain pano gamiten direcho commands na -->

<!-- 1 to 5 accordion -->

<details>

<summary>
1. install auto-dop using either npm or yarn
</summary>

**npm**:

```bash
$ npm install @erutidians/auto-dop
```

or **yarn**:

```bash
$ yarn add @erutidians/auto-dop
```

</details>

<details>

<summary>
2. after you finish installing, replace your package.json with this code:
</summary>

**package.json**:
```json
{
  "name": "100-days-of-productivity",
  "version": "0.0.1-dev",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "prev": "node index.js prev",
    "next": "node index.js next"
  },
  "devDependencies": {
    "@erutidians/auto-dop": "^1.0.0"
  }
}
```

</details>

<details>

<summary>
3. create your own index.js using this template code and edit the user object with your own info
</summary>

**index.js**:
```js
import { run } from '@erutidians/auto-dop';

const user = {
    name: 'Palskie',
    github: 'plskz',
    start: '7/6/2022', // M/D/YYYY
    round: 1,
};

run(user);
```

</details>

<details>

<summary>
4. run the index.js for today, yesterday, or tomorrow
</summary>

<details>

<summary>
- today, either using
</summary>

`node`:

```bash
$ node index.js
```

or `npm`:

```bash
$ npm run start
```

or `yarn`:

```bash
$ yarn run start
```

</details>

<details>

<summary>
- yesterday, either using
</summary>

`node`:

```bash
$ node index.js prev
```

or `npm`:

```bash
$ npm run prev
```

or `yarn`:

```bash
$ yarn run prev
```

</details>

<details>

<summary>
- tomorrow, using either
</summary>

`node`:

```bash
$ node index.js next
```

or `npm`:

```bash
$ npm run next
```

or `yarn`:

```bash
$ yarn run next
```

</details>

</details>

### Make a Suggestion
Feedbacks are always welcome!

<!-- TODO -->

<!-- Every opinion is debatably valid, and so we always accept suggestions for features! As long as:

- we deem it viable, possible, and respectably worth it, to work on
- large amount of upvotes / requests
- 
 -->

### Make a Contribution
Contributions are always welcome!

Please see [CONTRIBUTING.md](./CONTRIBUTING.md) to get started.

## Challengers

<small> Note: if you want to add yourself here in the list, fork this repository and submit a PR and wait for it to be reviewed and merged. More details can be found at [CONTRIBUTING.md](./CONTRIBUTING.md) so <u>make sure to follow that</u> or else the PR <b>will be immediately closed</b>.</small>

auto-dop has been used by these amazing challengers:

- [yrnmsk](https://github.com/yrnmsk/100-days-of-productivity)
- [plskz](https://github.com/plskz/100-days-of-productivity)
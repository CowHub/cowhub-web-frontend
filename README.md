# CowHub Web Frontend

## Getting Started

There is a sequence of actions you need to take to get going with the project, alongside a number of actions and tasks you should run every time you start your developer environment.

_The below instructions assume that you use zsh, although the steps which influence this should be very similar if you use a different shell._

---
<br>

## Installing dependencies

The main site is designed to be static and deployed as such. It is intended to represent a generic client which has no hard connection to the API it will use.

_Regardless of whether you are running a Mac or Ubuntu machine, these instructions are the same._

### Install node and npm (properly)

To manage your node environment, it is recommended that you use nvm. This allows you to use any version of node you wish for particular applications, whilst maintaining permissions at the user level ensuring that no superuser access is required for system-level administration.

Clone the nvm repository into your home directory and checkout the latest version.

```bash
git clone https://github.com/creationix/nvm.git ~/.nvm && cd ~/.nvm && \
git checkout `git describe --abbrev=0 --tags`
```

Now we need to append the following to your `~/.zshrc` so that we can use it.

```bash
# nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
```

_Don't forget to run `source ~/.zshrc`_

Now we can actually install node and set it up.

```bash
nvm install stable
nvm alias default stable
```

We now have node ready to go!

---
<br>

## Project setup

Project setup should be extremely simple. Do the below from the root directory of this project on your local machine.

```bash
npm install
```

---
<br>

## Starting the server

We are only working with the development environment locally, so the below should work out of the box.

```bash
npm run dev
```

Opening the `index.html` file available in public will now render the application.

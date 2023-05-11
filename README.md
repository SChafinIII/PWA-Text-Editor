# PWA Text Editor

This project is a text editor web application that allows developers to create notes or code snippets with or without an internet connection. The application provides a client-server folder structure that enables developers to save and retrieve notes or code snippets with IndexedDB. The project is built using next-gen JavaScript, webpack, and workbox to provide offline functionality and pre-caching.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [License](#license)

## Installation

To get started with the text editor web application, you can clone the project repository from Github by running the following command in your terminal:

```bash
git clone https://github.com/SChafinIII/PWA-Text-Editor.git
```

Once you have cloned the repository, navigate to the project root directory, and install the dependencies using the following command:

```bash
npm install
```

## Usage

After installing the dependencies, you can run the text editor web application using the following command:

```bash
npm run start
```

This command will start up the backend and serve the client, allowing you to open the text editor web application in your browser.

When you open the text editor web application, IndexedDB will immediately create a database storage, allowing you to enter content and subsequently save it to the database by clicking off of the DOM window. The text editor web application will retrieve the content from IndexedDB when you reopen the application after closing it.

Work in Progress* - You can also click on the Install button to download the web application as an icon on your desktop. When you load the web application, it will have a registered service worker using workbox, which will pre-cache your static assets upon loading and subsequent pages and static assets.

## Deployment

The application is deployed on Netlify at https://pwa-text-editor-jate.netlify.app/.

## License

This project is licensed under the MIT License. You can find more information about the license in the `LICENSE` file.
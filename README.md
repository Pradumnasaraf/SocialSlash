<div align="center">

<img src="https://user-images.githubusercontent.com/51878265/218109696-cf037ad4-87a4-4866-9df3-de7422c96b95.png" alt = "social slash banner">

<h4>Access all your social media and links by hitting endpoint.</h4>

[![Format](https://github.com/Pradumnasaraf/SocialSlash/actions/workflows/prettier.yml/badge.svg)](https://github.com/Pradumnasaraf/SocialSlash/actions/workflows/prettier.yml) [![Publish Image to GitHub Container Registry](https://github.com/Pradumnasaraf/SocialSlash/actions/workflows/publish-ghcr.yml/badge.svg)](https://github.com/Pradumnasaraf/SocialSlash/actions/workflows/publish-ghcr.yml) [![Releases](https://github.com/Pradumnasaraf/SocialSlash/actions/workflows/releases.yml/badge.svg)](https://github.com/Pradumnasaraf/SocialSlash/actions/workflows/releases.yml)

</div>

## 👨‍💻 Tech stack

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Vercel](https://vercel.com/)

## 🚀 Using and deploying the project

- You can deploy the project on [Vercel](https://vercel.com/) by clicking the button below. It will clone the project in your GitHub account and you can deploy it on Vercel (While deploying, Vercel with ask name for the cloned project).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FPradumnasaraf%2FSocialSlash)

- The cloned project will have the default links (of Pradumna Saraf). To change the links, update the `config/links.json` file with your links in your cloned repository. You can add as many links as you want with custom names. The structure of the file is as follows:

```json
{
  "github": "https://github.com/Pradumnasaraf",
  "linkedin": "https://www.linkedin.com/in/pradumnasaraf",
  "facebook": "https://www.facebook.com/pradumnasaraf.dev",
  "hashnode": "https://blog.pradumnasaraf.dev",
  "twitter": "https://twitter.com/pradumna_saraf",
  "instagram": "https://www.instagram.com/pradumnasaraf"
}
```

- Now Vercel will automatically redeploy the project with your links. After the deployment is complete, you can access your links by hitting the endpoint. For example, if you want to access your GitHub profile, you can hit `https://your-deployed-url-on-vercel/github` and you will be redirected to your GitHub profile.

(You can also fork the project and deploy by yourself on Vercel)

## 👨‍💻 Developing the project

This section includes how to test and develop API at your end. You can either run it in the cloud using **Gitpod** or run it inside a container using **docker** or choose to set up the complete environment locally.

**GitPod**

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Pradumnasaraf/SocialSlash)

**Docker Compose**

Prerequisites - Docker and Compose installed in your local system.

You can run below command and you can access the API at `localhost:9002`

```bash
docker compose up
```

**Local setup**

Prerequisites - Node.js and npm installed in your local system. Also make sure you have cloned and installed all the dependencies.

```js
npm run dev
```

You can access the API at `localhost:9002`

## 🛡️ License

This project is licensed under the GPL-3.0 license - see the [LICENSE](LICENSE) file for details

## 🤝 Support

If you liked the project, please consider giving it a ⭐️

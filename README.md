<div align="center">

<img src="https://user-images.githubusercontent.com/51878265/218109696-cf037ad4-87a4-4866-9df3-de7422c96b95.png" alt = "social slash banner">

<h4>Access all your social media and links by hitting endpoint.</h4>

</div>

## 👨‍💻 Tech stack

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Vercel](https://vercel.com/)


## 🚀 Using and deploying the project

After forking the project. Add your links with the endpoints in the [config/links.json](/config) file. You can add your custom endpoints as many as you want.

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

That's it. You are ready to deploy the project. You can deploy it using the button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FPradumnasaraf%2FSocialSlash)

Now you can access your links by hitting the endpoint. For example, if you want to access your github profile, you can hit `https://your-deployed-url-on-vercel/github` and you will be redirected to your github profile.


## 👨‍💻 Developing the project

This section includes how to test and develop API at your end. You can either run it in the cloud using **Gitpod** or run it inside a container using **docker** or choose to set up the complete environment locally.

**GitPod**

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Pradumnasaraf/Post-My-Message)

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

You can access the API at localhost:9002

## 🛡️ License

This project is licensed under the GPL-3.0 license - see the [LICENSE](LICENSE) file for details

## 🤝 Support

If you liked the project, please consider giving it a ⭐️

# nodejs-react-nginx-docker-compose
Build environment for nodes using docker compose

## First thing must installed tools
- Docker desktop
- node
## Step 1: Set up resource
- Pull resource
- Extract to Desktop\something-name
- Direct to Desktop\something-name\src\backend then run ``npm install``
- Direct to Desktop\something-name\src\frontend then run ``npm install``
## Step 2: Run docker
- Open host file in ``C:\Windows\System32\drivers\etc`` path 
- Add two lines ``127.0.0.1    123node.com`` and ``127.0.0.1    123client.com`` then save this file
- Open command line in something-name folder
- Typing ``docker-compose up -d``
- Waiting after the services have built successfully then open a browser and request to [https://123node.com](https://123node.com) and [https://123client.com](https://123client.com)

Note: if has problems from the conflict port then end service conflicted or change a service port in ``docker-compose.yml`` continue rebuild container

Watching files such as Dockerfile, docker-compose.yml, ./nginx/*.conf, package.json, .env, *config.js,... in order to have detail configurational information.

## License
FREE
   **To create image**

    docker build -t rentacar .

**Run container image**

    docker run -p 3333:3333 rentacar

**To access docker directory**

    docker exec -it f9b007fa9d61 /bin/bash

**docker compose realtime**

    docker-compose up

**docker compose background**

    docker-compose up -d

**stop docker compose**

    docker-compose stop

**remove docker compose**

    docker-compose down

**to see logs**

    docker logs rentacar -f

**list all containers**

    docker ps

**list all stopped/non-stopped containers**

    docker ps -a

**remove container**

    docker rm id

**start container**

    docker start id

**stop container**

    docker stop id

**list ip of containers**

    docker exec rentacar cat /etc/hosts

**To create a migration**

    yarn typeorm migration:create -n MigrationName

**To execute a migration**

    yarn typeorm migration:run

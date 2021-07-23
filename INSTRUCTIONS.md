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

**to see logs**

    docker logs rentacar -f

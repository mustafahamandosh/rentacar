   **To create image**

    docker build -t rentacar .



**Run container image**

    docker run -p 3333:3333 rentacar


**To access docker directory**

    docker exec -it f9b007fa9d61 /bin/bash

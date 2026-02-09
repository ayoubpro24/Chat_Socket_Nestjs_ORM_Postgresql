#!/bin/bash
echo "Install Postgressql in docker and setup to iniatialize database and store it"
docker run --name chat-db -e POSTGRES_PASSWORD=password -e POSTGRES_DB=chat_db -p 5432:5432 -d postgres

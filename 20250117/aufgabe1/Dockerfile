FROM node:slim

WORKDIR /app

COPY script.sh .
RUN chmod +x script.sh
COPY index.js .

VOLUME [ "/data" ]

ENTRYPOINT [ "./script.sh" ]
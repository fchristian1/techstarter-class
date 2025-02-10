FROM public.ecr.aws/lambda/nodejs:22

COPY package.json ${LAMBDA_TASK_ROOT}

RUN npm install

COPY index.cjs ${LAMBDA_TASK_ROOT}

ENV ENV_VAR="Meine Umgebungsvariable"

CMD [ "index.handler" ]
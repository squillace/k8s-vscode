FROM node:8-onbuild
COPY . .
RUN npm install
CMD ["npm", "start"]
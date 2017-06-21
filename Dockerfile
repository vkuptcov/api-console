FROM node:8.1-alpine

# Install Ruby (for Gem)
RUN apk update && apk add \
   git ruby \
   &&  echo 'gem: --no-document' > /etc/gemrc \
   && rm -rvf /var/cache/apk/


# Install Bower, Grunt & SASS
RUN npm install -g bower grunt-cli \
    && gem install sass

# Define working directory.
WORKDIR /data

COPY . /data

RUN npm install && bower --allow-root install

EXPOSE 9000

ENTRYPOINT ["/usr/local/bin/grunt"]
CMD ["default"]

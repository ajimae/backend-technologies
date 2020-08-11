ARG ELK_VERSION

# https://www.docker.elastic.co/
FROM docker.elastic.co/logstash/logstash:${ELK_VERSION}

COPY cities.csv .

# Add your logstash plugins setup here
# Example: RUN logstash-plugin install logstash-filter-json

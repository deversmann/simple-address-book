FROM registry.access.redhat.com/ubi8/ubi
RUN yum -y install httpd; yum clean all;
COPY entrypoint.sh .
RUN chmod 755 entrypoint.sh
WORKDIR /var/www/html
ADD bootstrap bootstrap
ADD js js
COPY index.html .
COPY config.default.json .
EXPOSE 80
ENTRYPOINT ["/entrypoint.sh"]
CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]

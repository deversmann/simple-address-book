FROM registry.access.redhat.com/ubi8/ubi
RUN yum -y install httpd; yum clean all;
COPY . /var/www/html/
RUN chmod 755 /var/www/html/entrypoint.sh
EXPOSE 80
ENTRYPOINT ["/var/www/html/entrypoint.sh"]
CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]
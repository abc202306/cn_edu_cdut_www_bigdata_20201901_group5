# class Book(models.Model):
#     bname = models.CharField(max_length=255, blank=True, null=True)
#     author = models.CharField(max_length=255, blank=True, null=True)
#     price = models.FloatField(blank=True, null=True)
#     chubanshe = models.CharField(max_length=255, blank=True, null=True)
#     saletime = models.DateTimeField(blank=True, null=True)
#     status = models.CharField(max_length=255, blank=True, null=True)
#
#     class Meta:
#         managed = False
#         db_table = 'book'

CREATE TABLE nongda.book(
    id INT PRIMARY KEY,
    bname CHAR(255) DEFAULT NULL,
    author CHAR(255) DEFAULT NULL,
    price FLOAT DEFAULT NULL,
    chubanshe CHAR(255) DEFAULT NULL,
    saletime DATETIME DEFAULT NULL,
    status CHAR(255) DEFAULT NULL
)
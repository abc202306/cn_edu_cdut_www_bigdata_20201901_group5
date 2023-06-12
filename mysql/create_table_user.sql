# class User(models.Model):
#     id = models.IntegerField(primary_key=True)
#     username = models.CharField(max_length=255, blank=True, null=True)
#     password = models.CharField(max_length=255, blank=True, null=True)
#
#     class Meta:
#         managed = False
#         db_table = 'user'

CREATE TABLE nongda.user (
    id INT PRIMARY KEY,
    username CHAR(255) DEFAULT NULL,
    password CHAR(255) DEFAULT NULL
)
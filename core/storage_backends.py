from storages.backends.s3boto3 import s3Boto3Storage

class StaticStorage(s3Boto3Storage):
    location = 'static'
    default_acl = 'private'

class MediaStore(s3Boto3Storage):
    location = 'media'
    file_overwrite = False    
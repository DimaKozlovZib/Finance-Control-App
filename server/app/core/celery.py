from celery import Celery

from app.core.sendVerifyMail.sendEmail import send_email
from server.app.core.config import settings


celery_app = Celery("VerifyCode", broker=settings.CELERY_BROKER_URL)


@celery_app.task(bind=True, max_retries=3)
def send_verification_email(self, email: str, code: str):
    try:
        send_email(to=email, subject="Ваш код подтверждения", body=f"Код: {code}")
    except Exception as e:
        raise self.retry(exc=e, countdown=2**self.request.retries)

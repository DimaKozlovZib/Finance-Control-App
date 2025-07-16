from email.utils import formatdate
from jinja2 import Template
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

from app.core.config import settings

file_path = os.path.join(
    os.path.dirname(__file__), "templates", "VerificationCodePage.html"
)
with open(file_path, "r") as file:
    template_str = file.read()

jinja_template = Template(template_str)


server = smtplib.SMTP(settings.SMTP_SERVER, settings.SMTP_PORT)

server.ehlo()
server.starttls()
server.login(settings.SERVER_EMAIL, settings.EMAIL_PASSWORD)


async def send_email(email: str, code: str):
    email_data = {
        "subject": "Код подтверждения",
        "verification_code": code,
    }

    email_content = jinja_template.render(email_data)

    msg = MIMEMultipart()

    msg["From"] = f"Finance control appendix"
    msg["To"] = email
    msg["Subject"] = email_data["subject"]

    msg["X-Auto-Response-Suppress"] = "OOF"
    msg["Date"] = formatdate(localtime=True)
    msg["X-Priority"] = "1"
    msg["X-MSMail-Priority"] = "High"
    msg["Importance"] = "high"
    msg["Auto-Submitted"] = "auto-generated"
    msg["Precedence"] = "bulk"
    msg["List-Unsubscribe-Post"] = "List-Unsubscribe=One-Click"

    msg.attach(MIMEText(f"Ваш код подтверждения - {code}", "plain"))
    msg.attach(MIMEText(email_content, "html"))

    server.sendmail(settings.SERVER_EMAIL, email, msg.as_string())

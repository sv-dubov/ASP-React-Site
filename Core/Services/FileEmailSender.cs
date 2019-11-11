using MyApp.ViewModels;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace cn_react_dotnetcore.Core.Services
{
    public class FileEmailSender : IEmailSender
    {
        public Task SendEmailAsync(string email, string subject, string message)
        {
            var emailMessage = $"To: {email}\nSubject: {subject}\nMessage: {message}\n\n";

            File.AppendAllText("emails.html", emailMessage);

            return Task.FromResult(0);
        }

        public Task SendPassEmail(RegisterViewModel model)
        {
            using (MailMessage mm = new MailMessage("semenplujara@gmail.com", model.Email))
            {
                mm.Subject = "Ваш пароль";
                string body = "Вітаємо";
                body += "<br /><br />Ви зареєструвалися на крутому сайті Святослава Дубова. Ваш пароль: " + string.Format("{0}", model.Password);
                body += "<br /><br />Дякуємо";
                mm.Body = body;
                mm.IsBodyHtml = true;
                SmtpClient smtp = new SmtpClient();
                smtp.Host = "smtp.gmail.com";
                smtp.EnableSsl = true;
                NetworkCredential NetworkCred = new NetworkCredential("semenplujara@gmail.com", "Qwerty1-");
                smtp.UseDefaultCredentials = true;
                smtp.Credentials = NetworkCred;
                smtp.Port = 587;
                smtp.Send(mm);
                return Task.FromResult(0);
            }
        }
    }
}
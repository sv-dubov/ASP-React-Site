using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.Extensions.Configuration;
using System;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace MyApp.Core.Services
{
    public class FileEmailSender : IEmailSender
    {
        private readonly IConfiguration _configuration;

        public FileEmailSender(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public Task SendEmailAsync(string email, string subject, string htmlMessage)
        {
            return Execute(subject, htmlMessage, email);
        }

        public Task Execute(string subject, string body, string email)
        {
            string emailOwner = _configuration.GetValue<string>("Email");
            string passwordOwner = _configuration.GetValue<string>("Password");
            int portOwner = Convert.ToInt32(_configuration.GetValue<string>("Port"));
            string hostOwner = _configuration.GetValue<string>("Host");
            using (MailMessage mm = new MailMessage(emailOwner, email))
            {
                mm.Subject = subject;
                mm.Body = body;
                mm.IsBodyHtml = true;
                SmtpClient smtp = new SmtpClient();
                smtp.Host = hostOwner;
                smtp.EnableSsl = true;
                NetworkCredential NetworkCred = new NetworkCredential(emailOwner, passwordOwner);
                smtp.UseDefaultCredentials = true;
                smtp.Credentials = NetworkCred;
                smtp.Port = portOwner;
                smtp.Send(mm);
                return Task.FromResult(0);
            }
        }

        //public Task SendEmailAsync(string email, string subject, string message)
        //{
        //    var emailMessage = $"To: {email}\nSubject: {subject}\nMessage: {message}\n\n";

        //    File.AppendAllText("emails.html", emailMessage);

        //    return Task.FromResult(0);
        //}

        //public Task SendPassEmail(RegisterViewModel model)
        //{
        //    using (MailMessage mm = new MailMessage("semenplujara@gmail.com", model.Email))
        //    {
        //        mm.Subject = "Ваш пароль";
        //        string body = "Вітаємо";
        //        body += "<br /><br />Ви зареєструвалися на крутому сайті Святослава Дубова. Ваш пароль: " + string.Format("{0}", model.Password);
        //        body += "<br /><br />Дякуємо";
        //        mm.Body = body;
        //        mm.IsBodyHtml = true;
        //        SmtpClient smtp = new SmtpClient();
        //        smtp.Host = "smtp.gmail.com";
        //        smtp.EnableSsl = true;
        //        NetworkCredential NetworkCred = new NetworkCredential("semenplujara@gmail.com", "Qwerty1-");
        //        smtp.UseDefaultCredentials = true;
        //        smtp.Credentials = NetworkCred;
        //        smtp.Port = 587;
        //        smtp.Send(mm);
        //        return Task.FromResult(0);
        //    }
        //}
    }
}
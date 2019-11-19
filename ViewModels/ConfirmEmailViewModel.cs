using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyApp.ViewModels
{
    public class ConfirmEmailViewModel
    {
        [Required(ErrorMessage = "Поле не може бути пустим!")]
        public string Code { get; set; }
    }
}

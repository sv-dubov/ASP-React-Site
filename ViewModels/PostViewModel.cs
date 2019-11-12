using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyApp.ViewModels
{
    public class PostVM
    {
        public int PostId { get; set; }
        public string Header { get; set; }
        public string Body { get; set; }
        public string Image { get; set; }
        public string Author { get; set; }
        public DateTime CreatedDate { get; set; }
    }

    public class PostCreateVM
    {
        public int PostId { get; set; }
        public string Header { get; set; }
        public string Body { get; set; }
        public string Image { get; set; }
        public string Author { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MyApp.Core.Models
{
    [Table("tblPosts")]
    public class Post
    {
        [Key]
        public int PostId { get; set; }
        public string Header { get; set; }
        public string Body { get; set; }
        public string Image { get; set; }
        public string Author { get; set; }
        public DateTime CreatedDate { get; set; }
        public virtual ICollection<Tag> Tags { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
    }
}
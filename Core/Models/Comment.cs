using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MyApp.Core.Models
{
    [Table("tblComments")]
    public class Comment
    {
        [Key]
        public int CommentId { get; set; }
        public int PostId { get; set; }
        public string Body { get; set; }
        public string Author { get; set; }
        public DateTime CreateDate { get; set; }
    }
}

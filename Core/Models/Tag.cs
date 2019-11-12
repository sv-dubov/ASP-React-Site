using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MyApp.Core.Models
{
    [Table("tblTags")]
    public class Tag
    {
        [Key]
        public int TagId { get; set; }
        public string TagName { get; set; }
        [ForeignKey("Posts")]
        public int PostId { get; set; }
        public virtual Post Posts { get; set; }
    }
}

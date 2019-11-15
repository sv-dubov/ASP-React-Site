using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyApp.Core.Models;
using MyApp.Persistence;
using MyApp.ViewModels;

namespace MyApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public PostController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult PostList()
        {
            var model = _context.Posts.Select(p => new PostVM
            {
                PostId = p.PostId,
                Header = p.Header,
                Body = p.Body,
                Image = p.Image,
                Author = p.Author,
                CreatedDate = DateTime.Now
            }).ToList();
            return Ok(model);
        }

        [HttpPost("create")]
        public IActionResult Create([FromBody]PostCreateVM model)
        {
            Post post = new Post
            {
                PostId = model.PostId,
                Header = model.Header,
                Body = model.Body,
                Image = model.Image,
                Author = model.Author,
                CreatedDate = DateTime.Now
            };
            _context.Posts.Add(post);
            _context.SaveChanges();
            return Ok(post);
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Post post = _context.Posts.Where(p => p.PostId == id).FirstOrDefault();
            _context.Posts.Remove(post);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}
﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Bug_Tracker.Data;
using Bug_Tracker.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;

namespace Bug_Tracker.Controllers
{


    [Route("api/[controller]")]
    [ApiController]
    public class BugsController : ControllerBase
    {
        private readonly BugContext _context;
        protected ApplicationDbContext ApplicationDbContext { get; set; }
        protected UserManager<ApplicationUser> UserManager { get; set; }

        public BugsController(BugContext context)
        {
            _context = context;
        }

        // GET: api/Bugs
        [HttpGet()]
        public async Task<ActionResult<IEnumerable<Bugs>>> GetProject_Bugs(int projectid, string user)
        {

            return await _context.Project_Bugs.Where(pid => pid.ProjectID == projectid).Where(u => u.Reporter == user).ToListAsync();

        }

        // GET: api/Bugs/5
        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<Bugs>> GetBugs(int id)
        {

            var bugs = await _context.Project_Bugs.FindAsync(id);

            if (bugs == null)
            {
                return NotFound();
            }

            return bugs;
        }

        // PUT: api/Bugs/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBugs(int id, Bugs bugs)
        {
            if (id != bugs.Id)
            {
                return BadRequest();
            }

            _context.Entry(bugs).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BugsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Bugs
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Bugs>> PostBugs(Bugs bugs)
        {
            int maxId = _context.Project_Bugs.Max(b => b.Id);

            bugs.Id = maxId + 1;

            _context.Project_Bugs.Add(bugs);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBugs", new { id = bugs.Id }, bugs);
        }

        // DELETE: api/Bugs/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Bugs>> DeleteBugs(int id)
        {
            var bugs = await _context.Project_Bugs.FindAsync(id);
            if (bugs == null)
            {
                return NotFound();
            }

            _context.Project_Bugs.Remove(bugs);
            await _context.SaveChangesAsync();

            return bugs;
        }

        private bool BugsExists(int id)
        {
            return _context.Project_Bugs.Any(e => e.Id == id);
        }
    }
}
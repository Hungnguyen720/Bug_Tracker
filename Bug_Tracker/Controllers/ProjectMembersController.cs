using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Bug_Tracker.Data;
using Bug_Tracker.Models;

namespace Bug_Tracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectMembersController : ControllerBase
    {
        private readonly ProjectMembersContext _context;

        public ProjectMembersController(ProjectMembersContext context)
        {
            _context = context;
        }

        // GET: api/ProjectMembers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProjectMembersModel>>> GetProject_Members()
        {
            return await _context.Project_Members.ToListAsync();
        }

        // GET: api/ProjectMembers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProjectMembersModel>> GetProjectMembersModel(int id)
        {
            var projectMembersModel = await _context.Project_Members.FindAsync(id);

            if (projectMembersModel == null)
            {
                return NotFound();
            }

            return projectMembersModel;
        }

        // PUT: api/ProjectMembers/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProjectMembersModel(int id, ProjectMembersModel projectMembersModel)
        {
            if (id != projectMembersModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(projectMembersModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjectMembersModelExists(id))
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

        // POST: api/ProjectMembers
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<ProjectMembersModel>> PostProjectMembersModel(ProjectMembersModel projectMembersModel)
        {
            _context.Project_Members.Add(projectMembersModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProjectMembersModel", new { id = projectMembersModel.Id }, projectMembersModel);
        }

        // DELETE: api/ProjectMembers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ProjectMembersModel>> DeleteProjectMembersModel(int id)
        {
            var projectMembersModel = await _context.Project_Members.FindAsync(id);
            if (projectMembersModel == null)
            {
                return NotFound();
            }

            _context.Project_Members.Remove(projectMembersModel);
            await _context.SaveChangesAsync();

            return projectMembersModel;
        }

        private bool ProjectMembersModelExists(int id)
        {
            return _context.Project_Members.Any(e => e.Id == id);
        }
    }
}

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
    public class ProjectSettingsModelsController : ControllerBase
    {
        private readonly ProjectSettingsContext _context;

        public ProjectSettingsModelsController(ProjectSettingsContext context)
        {
            _context = context;
        }

        // GET: api/ProjectSettingsModels
        [HttpGet]
        public async Task<ActionResult<List<ProjectSettingsModel>>> GetProjectSettings(string user)
        {
            return await _context.ProjectSettings.FromSqlRaw($"Select ProjectSettings.Id, ProjectSettings.ProjectId, ProjectName, Owner, DateStart, DateEnd, ProjectOverview From ProjectSettings INNER JOIN Project_Members ON ProjectSettings.ProjectId = Project_Members.ProjectId WHERE ProjectMember = '{user}'").ToListAsync();
            //    return await _context.ProjectSettings.ToListAsync();
        }

        // GET: api/ProjectSettingsModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProjectSettingsModel>> GetProjectSettingsModel(int id)
        {
            var projectSettingsModel = await _context.ProjectSettings.FindAsync(id);

            if (projectSettingsModel == null)
            {
                return NotFound();
            }

            return projectSettingsModel;
        }

        // PUT: api/ProjectSettingsModels/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProjectSettingsModel(int id, ProjectSettingsModel projectSettingsModel)
        {
            if (id != projectSettingsModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(projectSettingsModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjectSettingsModelExists(id))
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

        // POST: api/ProjectSettingsModels
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<ProjectSettingsModel>> PostProjectSettingsModel(ProjectSettingsModel projectSettingsModel)
        {
            int maxId = _context.ProjectSettings.Max(b => b.Id);

            projectSettingsModel.Id = maxId + 1;

            _context.ProjectSettings.Add(projectSettingsModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProjectSettingsModel", new { id = projectSettingsModel.Id }, projectSettingsModel);
        }

        // DELETE: api/ProjectSettingsModels/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ProjectSettingsModel>> DeleteProjectSettingsModel(int id)
        {
            var projectSettingsModel = await _context.ProjectSettings.FindAsync(id);
            if (projectSettingsModel == null)
            {
                return NotFound();
            }

            _context.ProjectSettings.Remove(projectSettingsModel);
            await _context.SaveChangesAsync();

            return projectSettingsModel;
        }

        private bool ProjectSettingsModelExists(int id)
        {
            return _context.ProjectSettings.Any(e => e.Id == id);
        }
    }
}

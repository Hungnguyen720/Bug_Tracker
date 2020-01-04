using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Bug_Tracker.Data;
using Bug_Tracker.Models;
using Task = Bug_Tracker.Models.Task;

namespace Bug_Tracker.Controllers
{

    public class TaskCount
    {
        public TaskCount(int openCount, int closedCount) 
        {
            OpenCount = openCount;
            ClosedCount = closedCount;
        }

        public int OpenCount { get; set; }
        public int ClosedCount { get; set; }
    }

    public class OverdueTask
    {
        public string assignedUser { get; set; }
        public double daysOverdue { get; set; }
    }



    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly TaskContext _context;

        public TasksController(TaskContext context)
        {
            _context = context;
        }

        // GET: api/Tasks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Task>>> GetTasks(int projectId)
        {
            return await _context.Task.Where(s => s.ProjectId == projectId).ToListAsync();
        }

        [HttpGet("countTask")]
        public async Task<TaskCount> getAllOpenTask(int projectId)
        {
            int openCount = await _context.Task
                .Where(t => t.Status == "Open")
                .Where(t => t.ProjectId == projectId)
                .CountAsync();

            int closedCount = await _context.Task
                .Where(t => t.Status == "Closed")
                .Where(t => t.ProjectId == projectId)
                .CountAsync();

            TaskCount count = new TaskCount(openCount, closedCount);
            return count;

        }

        [HttpGet("overdueTask")]
        public async Task<ActionResult<IEnumerable<OverdueTask>>> getOverdueTasks() {

            return await _context.Task.FromSqlRaw("SELECT * FROM Task")
                .Where(t => t.DateEnd < DateTime.Now)
                .Select(t => new OverdueTask {
                    assignedUser = t.Owner,
                    daysOverdue = Math.Round((t.DateEnd - DateTime.Now).TotalDays) * -1
                }).ToListAsync();

        }

        // GET: api/Tasks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Task>> GetTask(int id)
        {
            var task = await _context.Task.FindAsync(id);

            if (task == null)
            {
                return NotFound();
            }

            return task;
        }

        // PUT: api/Tasks/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTask(int id, Task task)
        {
            if (id != task.Id)
            {
                return BadRequest();
            }

            _context.Entry(task).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaskExists(id))
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

        // POST: api/Tasks
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Task>> PostTask(Task task)
        {
            _context.Task.Add(task);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTask", new { id = task.Id }, task);
        }

        // DELETE: api/Tasks/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Task>> DeleteTask(int id)
        {
            var task = await _context.Task.FindAsync(id);
            if (task == null)
            {
                return NotFound();
            }

            _context.Task.Remove(task);
            await _context.SaveChangesAsync();

            return task;
        }

        private bool TaskExists(int id)
        {
            return _context.Task.Any(e => e.Id == id);
        }
    }
}

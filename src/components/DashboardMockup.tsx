import { BarChart3, CheckCircle2, Clock, TrendingUp, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function DashboardMockup() {
  return (
    <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-border overflow-hidden">
      {/* Dashboard Header */}
      <div className="border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          <div className="text-[13px] text-secondary">Dashboard Overview</div>
          <div className="w-8 h-8 bg-primary/10 rounded-lg" />
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-6 space-y-4">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <span className="text-[11px] text-green-600">+12%</span>
            </div>
            <div className="text-[24px] font-semibold">2,847</div>
            <div className="text-[12px] text-secondary">Total Tasks</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 dark:from-purple-500/20 dark:to-purple-500/10 rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-[11px] text-green-600">+8%</span>
            </div>
            <div className="text-[24px] font-semibold">42</div>
            <div className="text-[12px] text-secondary">Team Members</div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 dark:from-green-500/20 dark:to-green-500/10 rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-[11px] text-green-600">87%</span>
            </div>
            <div className="text-[24px] font-semibold">1,924</div>
            <div className="text-[12px] text-secondary">Completed</div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-border p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-[14px] font-medium">Project Activity</div>
            <BarChart3 className="w-4 h-4 text-secondary" />
          </div>
          <div className="h-[120px] flex items-end gap-2">
            <div className="flex-1 bg-primary/20 rounded-t-lg" style={{ height: '45%' }} />
            <div className="flex-1 bg-primary/30 rounded-t-lg" style={{ height: '62%' }} />
            <div className="flex-1 bg-primary/40 rounded-t-lg" style={{ height: '78%' }} />
            <div className="flex-1 bg-primary rounded-t-lg" style={{ height: '95%' }} />
            <div className="flex-1 bg-primary/50 rounded-t-lg" style={{ height: '71%' }} />
            <div className="flex-1 bg-primary/35 rounded-t-lg" style={{ height: '56%' }} />
            <div className="flex-1 bg-primary/25 rounded-t-lg" style={{ height: '41%' }} />
          </div>
        </div>

        {/* Task List */}
        <div className="bg-white dark:bg-gray-800/50 rounded-xl border border-border p-4 space-y-3">
          <div className="text-[14px] font-medium">Recent Tasks</div>
          <div className="space-y-2">
            {[
              { title: 'Design system update', status: 'In Progress', priority: 'high' },
              { title: 'API integration', status: 'Review', priority: 'medium' },
              { title: 'User testing session', status: 'Scheduled', priority: 'low' },
            ].map((task, index) => (
              <div key={index} className="flex items-center justify-between py-2 px-3 bg-accent/50 dark:bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    task.priority === 'high' ? 'bg-red-500' :
                    task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`} />
                  <span className="text-[13px]">{task.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3 text-secondary" />
                  <span className="text-[11px] text-secondary">{task.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}